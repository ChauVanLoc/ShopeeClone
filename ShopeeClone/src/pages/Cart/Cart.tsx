import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Empty } from 'antd'
import classNames from 'classnames'
import produce from 'immer'
import { keyBy } from 'lodash'
import { useContext, useState, useEffect, useMemo, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { PurchaseFetching } from 'src/Api/PurchaseFetching'
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
      queryClient.invalidateQueries({ queryKey: ['purchase_all'] })
      purchaseFetching.isRefetching && setDisibleAll(true)
    },
    onMutate() {
      setDisibleAll(false)
    }
  })
  const orderMutation = useMutation({
    mutationFn: (body: Order[]) => PurchaseFetching.BuyPurchaseFetching(body),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ['purchase_all'] })
      toast.success(data.data.message, {
        position: 'top-right',
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
    <div className='bg-backg'>
      <div className='mx-auto max-w-7xl bg-backg py-4 text-center text-base'>
        {purchases && purchases.length > 0 && (
          <div className='mb-4 grid grid-cols-16 items-center rounded-sm bg-product px-8 py-5 text-center shadow-sm'>
            <input
              onChange={handleChecked(true)}
              id='check-all-product'
              type='checkbox'
              checked={isCheckedAll}
              className='bg-produc m-auto block h-4 w-4 rounded border-gray-100'
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
                className={`bg-produc m-auto block h-4 w-4 cursor-pointer rounded border-gray-100 ${classNames(
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
                  <div className='mr-5 flex-shrink-0'>
                    <img
                      className='h-[80px] w-[80px] object-cover'
                      src={purchase.product.image}
                      alt='img'
                    />
                  </div>
                  <div className='w-[70%]'>
                    <p className='line-clamp-2'>{purchase.product.name}</p>
                    <div className='mt-2 flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-5 w-5 text-primary'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                        />
                      </svg>
                      <span className='ml-3 text-xs'>
                        7 Ngày Miễn Phí Trả Hàng
                      </span>
                    </div>
                  </div>
                </div>
              </NavLink>
              <div className='col-span-3 col-start-8 text-center'>
                <span className='mr-3 text-gray-400 line-through'>
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
              className='bg-produc m-auto block h-4 w-4 cursor-pointer rounded border-gray-100'
            />
            <div className='col-span-5 col-start-2 text-start'>
              <label className='cursor-pointer' htmlFor='check-all'>
                Chọn tất cả ({purchases?.length})
              </label>
            </div>
            <span className='col-span-3 col-start-8'>
              Tổng thanh toán ({purchases?.length} sản phẩm):
            </span>
            <span className='col-span-3 col-start-11 pl-4 text-start text-2xl text-primary'>
              <span>₫{convertCurrentcy(totalPrice, 0)}</span>
              <div className='flex text-sm'>
                <span className='mr-4 text-gray-600'>Tiết kiệm</span>
                <span className='text-base'>
                  ₫{convertCurrentcy(totalPriceBeforDiscount - totalPrice, 0)}
                </span>
              </div>
            </span>
            <button
              onClick={handleOrder}
              className='col-start-14 col-span-3 bg-primary px-4 py-2 text-white duration-150 hover:bg-primary/90'
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
