import { useMutation, useQueryClient } from '@tanstack/react-query'
import Empty from 'antd/lib/empty'
import classNames from 'classnames'
import produce from 'immer'
import keyBy from 'lodash/keyBy'
import { useContext, useState, useEffect, useMemo, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PurchaseFetching } from 'src/Api/PurchaseFetching'
import { PurchaseStatus } from 'src/constants/PurchaseStatus'
import { Context } from 'src/context/AppContext'
import useQueryListPurchase from 'src/hooks/useQueryListPurchase'
import { Order, Purchase } from 'src/types/Purchase.type'
import { convertCurrentcy, initId } from 'src/utils/utils'

export type CartType = Purchase & {
  isChecked: boolean
  disable: boolean
}

function Cart() {
  const queryClient = useQueryClient()
  const { isAuth } = useContext(Context)
  const [purchases, setPurchases] = useState<CartType[]>([])
  const purchaseFetching = useQueryListPurchase(isAuth)
  const location = useLocation()
  const deleteMutation = useMutation({
    mutationFn: (id: string[]) => PurchaseFetching.DeletePurchaseFetching(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['purchases', -1] })
      purchaseFetching.isRefetching && setDisibleAll(true)
    },
    onMutate() {
      setDisibleAll(false)
    }
  })
  const orderMutation = useMutation({
    mutationFn: (body: Order[]) => PurchaseFetching.BuyPurchaseFetching(body),
    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ['purchases', PurchaseStatus.IN_CART]
      })
      toast.success(data.data.message, {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: 'colored'
      })
    }
  })
  const totalPrice = useMemo(
    () =>
      purchases &&
      purchases.reduce(
        (total, current) =>
          total + (current.isChecked ? current.price * current.buy_count : 0),
        0
      ),
    [purchases]
  )
  const totalPriceBeforDiscount = useMemo(
    () =>
      purchases &&
      purchases.reduce(
        (total, current) =>
          total +
          (current.isChecked
            ? current.price_before_discount * current.buy_count
            : 0),
        0
      ),
    [purchases]
  )
  const isCheckedAll = useMemo(
    () => purchases.every((e) => e.isChecked),
    [purchases]
  )
  const setDisibleAll = useCallback((disible: boolean) => {
    setPurchases(
      produce((draf) => {
        draf.map((e) => (e.disable = disible))
      })
    )
  }, [])

  const handleChecked =
    (all: boolean, index?: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      all
        ? setPurchases(
            produce((draf) => {
              draf.map((o) => (o.isChecked = e.target.checked))
            })
          )
        : setPurchases(
            produce((draf) => {
              draf[index as number].isChecked = e.target.checked
            })
          )
    }
  const handleDelete = (id: string) => () => {
    deleteMutation.mutate([id])
  }
  const handleOrder = () => {
    const orders: Order[] = purchases
      .filter((o) => o.isChecked)
      .map((e) => ({ product_id: e.product._id, buy_count: e.buy_count }))
    orders.length > 0
      ? orderMutation.mutate(orders)
      : toast.warn(
          'Mua hàng không thành công vì không có đơn hàng nào được chọn',
          {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: 'colored'
          }
        )
  }
  useEffect(() => {
    purchaseFetching.data &&
      setPurchases((pre) => {
        const newPurchases = keyBy(purchases, '_id')
        return purchaseFetching.data?.data.data.map((e, i) => {
          return {
            ...e,
            disable: false,
            isChecked: location.state
              ? location.state.id === e._id
              : Object.keys(newPurchases).length > 0
              ? newPurchases[e._id].isChecked
              : false
          }
        })
      })
  }, [purchaseFetching.isSuccess, purchaseFetching.isRefetching])
  useEffect(() => {
    window.history.replaceState({}, '')
  }, [])
  return (
    <div className='bg-backg p-3 md:p-3 lg:p-0 xl:p-0'>
      <div className='mx-auto bg-backg text-center text-[10px] md:max-w-3xl md:text-xs lg:max-w-4xl lg:py-4 lg:text-sm xl:max-w-7xl xl:py-4 xl:text-base'>
        {purchases && purchases.length > 0 && (
          <div className='mb-4 grid grid-cols-16 items-center rounded-sm bg-product px-8 py-5 text-center shadow-sm'>
            <input
              onChange={handleChecked(true)}
              id='check-all-product'
              type='checkbox'
              checked={isCheckedAll}
              className='bg-produc m-auto block h-4 w-4 rounded border-gray-100 accent-primary'
            />
            <label
              className='col-span-5 col-start-2 text-start'
              htmlFor='check-all-product'
            >
              Sản phẩm
            </label>
            <span className='col-span-3 col-start-8 text-center text-gray-500'>
              Đơn Giá
            </span>
            <span className='col-span-2 col-start-11 text-gray-500'>
              Số Lượng
            </span>
            <span className='col-span-2 col-start-13 text-gray-500'>
              Số Tiền
            </span>
            <span className='col-start-15 col-span-2 text-gray-500'>
              Thao Tác
            </span>
          </div>
        )}

        {purchases.length > 0 ? (
          purchases.map((purchase, index) => (
            <div
              key={purchase._id}
              className='my-4 grid grid-cols-16 items-center rounded-sm bg-product px-8 py-5 text-sm shadow-sm'
            >
              <input
                disabled={purchase.disable}
                onChange={handleChecked(false, index)}
                checked={purchase.isChecked}
                type='checkbox'
                className={`bg-produc m-auto block h-4 w-4 cursor-pointer rounded border-gray-100 accent-primary ${classNames(
                  { 'cursor-wait': purchase.disable }
                )}`}
              />
              <NavLink
                to={`/${initId(purchase.product.name)}-id,${
                  purchase.product._id
                }`}
                className='col-span-5 col-start-2 text-start'
              >
                <div className='flex items-center justify-between'>
                  <div className='mr-2 flex-shrink-0 md:mr-2 lg:mr-4 xl:mr-5'>
                    <img
                      className='object-cover md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] xl:h-[80px] xl:w-[80px]'
                      src={purchase.product.image}
                      alt='img'
                    />
                  </div>
                  <div className='grow-0'>
                    <p className='line-clamp-2'>{purchase.product.name}</p>
                    <div className='mt-2 flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='text-primary md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-5 xl:w-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                        />
                      </svg>
                      <span className='ml-1 text-[8px] md:text-[10px] lg:ml-3 lg:text-xs xl:ml-3 xl:text-xs'>
                        7 Ngày Miễn Phí Trả Hàng
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
              <div className='col-span-3 col-start-8 text-center'>
                <span className='text-gray-400 line-through md:mr-2 lg:mr-3 xl:mr-3'>
                  ₫{convertCurrentcy(purchase.product.price_before_discount, 0)}
                </span>
                <span className=''>
                  ₫{convertCurrentcy(purchase.product.price, 0)}
                </span>
              </div>
              <span className='col-span-2 col-start-11 text-center'>
                {purchase.buy_count}
              </span>
              <span className='col-span-2 col-start-13 text-center text-primary'>
                ₫
                {convertCurrentcy(
                  purchase.buy_count * purchase.product.price,
                  0
                )}
              </span>
              <div className='col-start-15 col-span-2 text-center '>
                <button
                  disabled={purchase.disable}
                  onClick={handleDelete(purchase._id)}
                  className={`cursor-pointer duration-150 hover:text-primary ${classNames(
                    { 'cursor-wait hover:bg-primary': purchase.disable }
                  )}`}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <Empty
              className='mb-5'
              imageStyle={{
                margin: '10px auto',
                width: '150px',
                height: '150px'
              }}
              image='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png'
              description={
                <span className='mt-5 pb-7 text-lg font-medium text-gray-400'>
                  Giỏ hàng của bạn rỗng
                </span>
              }
            >
              <Link
                to={'/'}
                className='bg-primary px-6 py-2 text-base uppercase text-white duration-150 hover:bg-primary/90 hover:text-white'
              >
                Mua ngay
              </Link>
            </Empty>
          </>
        )}
        {purchases.length > 0 && (
          <div className='sticky bottom-0 mb-4 grid grid-cols-16 items-center rounded-sm border border-gray-200 bg-product px-8 py-5 text-center'>
            <input
              onChange={handleChecked(true)}
              id='check-all'
              type='checkbox'
              checked={isCheckedAll}
              className='bg-produc m-auto block h-4 w-4 cursor-pointer rounded border-gray-100 accent-primary'
            />
            <div className='col-span-5 col-start-2 text-start'>
              <label className='cursor-pointer' htmlFor='check-all'>
                Chọn tất cả ({purchases?.length})
              </label>
            </div>
            <span className='col-span-3 col-start-8 text-end'>
              Tổng thanh toán ({purchases?.length} sản phẩm):
            </span>
            <span className='col-span-3 col-start-11 pl-4 text-start text-primary md:text-lg lg:text-xl xl:text-2xl'>
              <span>₫{convertCurrentcy(totalPrice, 0)}</span>
              <div className='flex md:text-xs lg:text-sm xl:text-sm'>
                <span className='text-gray-600 md:mr-2 lg:mr-4 xl:mr-4'>
                  Tiết kiệm
                </span>
                <span className='md:text-xs lg:text-sm xl:text-base'>
                  ₫{convertCurrentcy(totalPriceBeforDiscount - totalPrice, 0)}
                </span>
              </div>
            </span>
            <button
              onClick={handleOrder}
              className='col-start-14 col-span-3 bg-primary text-white duration-200 hover:bg-primary/90 md:ml-1 md:px-[10px] md:py-2 lg:ml-2 lg:px-3 lg:py-[6px] xl:px-4 xl:py-2'
            >
              Mua hàng
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
