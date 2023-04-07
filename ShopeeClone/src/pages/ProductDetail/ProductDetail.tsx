import DOMPurify from 'dompurify'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { Rate } from 'antd'
import useQueyProduct from 'src/hooks/useQueyProduct'
import { convertCurrentcy, convertDigitalNumber, rateSale } from 'src/utils/utils'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Image } from 'antd'
import { yupResolver } from '@hookform/resolvers/yup'
import { OrderSchema, OrderSchematype } from 'src/utils/rules'
import useIdHook from 'src/hooks/useIdHook'
import classNames from 'classnames'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PurchaseFetching } from 'src/Api/PurchaseFetching'
import { Order } from 'src/types/Purchase.type'
import { toast } from 'react-toastify'

function ProductDetail() {
  const clientQuery = useQueryClient()
  const { idNameProduct } = useParams()
  const id = idNameProduct?.split(',')[1]
  const idProduct = useIdHook()
  const [slider1, setSlider1] = useState<Slider | null>(null)
  const [slider2, setSlider2] = useState<Slider | null>(null)
  const [count, setCount] = useState<number>(1)
  const [change, setChange] = useState<number>(0)
  const { mutate: addToCard } = useMutation({
    mutationFn: (body: Order) => PurchaseFetching.AddToCardFetching(body),
    onSuccess: (data) => {
      // clientQuery.invalidateQueries(['purchases_all'])
      toast.success(data.data.message, {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    },
    onError(error, variables, context) {
      toast.error('Lỗi!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  })
  const {
    register,
    getValues,
    setValue,
    formState: { errors }
  } = useForm<OrderSchematype>({ resolver: yupResolver(OrderSchema) })
  const handleAmount = (syntax: 'add' | 'substract') => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (syntax === 'add' && count < (product?.quantity as number)) {
      setCount((pre) => pre + 1)
    } else if (syntax === 'substract' && count > 1) {
      setCount((pre) => pre - 1)
    }
  }
  const handleOrder = () => {
    addToCard({
      product_id: id as string,
      buy_count: Number(getValues('amount'))
    })
  }
  const { data } = useQueyProduct(id as string)
  const product = data?.data.data

  if (!product) return null
  return (
    <div className='bg-[#f5f5f5] py-3'>
      {/* <div className='mx-auto flex max-w-7xl py-4'>
        <Link to={'/'} className={'mr-2 text-blue'}>
          Shopee
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Thời trang nam
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo sơ mi
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo sơ mi nam hoạ tiết Hoa Mẫu Đơn Peony FOMAN tay ngắn vải lụa, thoáng khí, không nhăn, thấm hút (FM26)
        </Link>
      </div> */}
      <div className='flex flex-col items-center'>
        <div className='mb-5 w-[1280px] text-sm shadow-sm'>
          <div className='rounded-ms flex content-between items-start bg-white py-3'>
            <div className='flex w-[40%] flex-col justify-center px-9'>
              <div className='h-[450px] w-[450px]'>
                <Image.PreviewGroup>
                  <Slider
                    infinite={false}
                    ref={(slider) => setSlider2(slider)}
                    asNavFor={slider1 as Slider}
                    dots={false}
                    beforeChange={(_, next) => {
                      setChange(next)
                    }}
                  >
                    {product.images.map((_, i) => (
                      <img key={idProduct} src={product.images[i]} alt={idProduct} />
                    ))}
                  </Slider>
                </Image.PreviewGroup>
              </div>
              <div className='mt-3 w-[450px]'>
                <Slider
                  infinite={false}
                  ref={(slider) => setSlider1(slider)}
                  asNavFor={slider2 as Slider}
                  slidesToShow={5}
                  slidesToScroll={1}
                  dots={false}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  touchMove
                  arrows={false}
                  beforeChange={(_, next) => {
                    if (next > 0) {
                      if (next < 2) {
                        setChange(next)
                      } else {
                        setChange(change)
                      }
                    } else {
                      setChange(change)
                    }
                  }}
                >
                  {product.images.map((_, i) => (
                    <img
                      className={classNames({ 'border-2 border-solid border-red': change === i })}
                      key={idProduct}
                      src={product.images[i]}
                      alt={idProduct}
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div className='h-auto w-[60%] px-9'>
              <h3 className='mb-3 truncate text-lg font-medium'>{product.name}</h3>
              <div className='mb-3 flex'>
                <Rate className='text-sm text-start' disabled allowHalf defaultValue={4.5} />
                <div className='ml-2 h-full w-1 bg-gray-100' />
                <span className='ml-2'>{convertDigitalNumber(product.sold)}</span>
                <div className='ml-3'>Đã bán</div>
              </div>
              <div className='mb-3 flex rounded-sm bg-[#FAFAFA] py-5 px-5'>
                <div className='mr-4 flex items-center text-gray-300 line-through'>
                  <span>₫</span>
                  <span className='text-lg'>{convertCurrentcy(product.price_before_discount, 0)}</span>
                </div>
                <div className='mr-5 text-red'>
                  <span className='mr-1 text-3xl'>₫</span>
                  <span className='text-3xl'>{convertCurrentcy(product.price, 0)}</span>
                </div>
                <div className='flex items-center'>
                  <span className='rounded-sm bg-red py-[0.5px] px-1 text-xs font-bold text-white'>
                    {rateSale(product.price_before_discount, product.price)} Giảm
                  </span>
                </div>
              </div>
              <div className='grid-col-5 grid grid-rows-7 gap-y-4 px-7'>
                <div className='col-span-1 col-start-1 row-start-1 text-gray-500'>Mã Giảm Giá Của Shop</div>
                <div className='col-span-4 col-start-2 row-start-1'>
                  <span className='bg-rose-200 px-[6px] py-1 text-rose-500'>Giảm đ20</span>
                </div>
                <div className='col-span-1 col-start-1 row-start-2 text-gray-500'>Bảo hiểm</div>
                <div className='col-span-1 col-start-2 row-start-2'>Bảo hiểm Thời trang</div>
                <div className='col-span-1 col-start-3 row-start-2 text-blue'>Tìm hiểu thêm</div>
                <div className='col-span-1 col-start-1 row-start-3 text-gray-500'>Vận chuyển</div>
                <div className='col-span-3 col-start-2 row-start-3'>
                  <div>Miễn phí vận chuyển</div>
                  <div>Miễn phí vận chuyển cho đơn hàng trên đ50.000</div>
                </div>
                <div className='col-span-1 col-start-2 row-start-4'>
                  <div>Vận chuyển tới</div>
                  <div>Phí Vận Chuyển</div>
                </div>
                <div className='col-span-2 col-start-3 row-start-4'>
                  <div className='flex items-center'>
                    Phường Linh Trung, Thành phố Thủ Đức
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='ml-2 h-4 w-4'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                    </svg>
                  </div>
                  <div>₫0 - ₫22.000</div>
                </div>
                <div className='col-span-1 col-start-1 row-start-5 text-gray-500'>Size</div>
                <div className='col-span-4 col-start-2 row-start-5'>
                  <div className='flex'>
                    <div className='mr-3 border-[1px] border-gray-200 px-3 py-2'>S (50-60kg)</div>
                    <div className='mr-3 border-[1px] border-gray-200 px-3 py-2'>M (60-70kg)</div>
                    <div className='mr-3 border-[1px] border-gray-200 px-3 py-2'>L (70-80kg)</div>
                    <div className='border-[1px] border-gray-200 px-3 py-2'>XL (80-95kg)</div>
                  </div>
                </div>
                <div className='col-span-2 col-start-2 row-start-6 flex items-center text-base text-blue'>
                  Bảng quy đổi kích cỡ
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='ml-1 h-4 w-4'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
                <div className='col-span-1 col-start-1 row-start-7 my-auto text-gray-500'>Số Lượng</div>
                <div className='col-span-1 col-start-2 row-start-7 my-auto text-gray-500'>
                  <div className='flex items-center'>
                    <button
                      onClick={handleAmount('substract')}
                      className='rounded-sm border-[1px] border-gray-300 px-2 py-[6px]'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-4 w-4'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
                      </svg>
                    </button>
                    <div className='rounded-sm border-y-[1px] border-gray-300 px-3 text-center'>
                      <input
                        value={count}
                        className='w-14 px-3 py-1 text-center outline-none'
                        type='text'
                        id=''
                        {...register('amount')}
                      />
                    </div>
                    <button
                      onClick={handleAmount('add')}
                      className='rounded-sm border-[1px] border-gray-300 px-2 py-[6px]'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-4 w-4'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='col-span-1 col-start-3 row-start-7 my-auto text-center text-gray-500'>
                  {product.quantity} sản phẩm có sẳn
                </div>
              </div>
              <div className='ml-7 mb-2 grid grid-cols-10 gap-9 pt-5 text-base'>
                <button
                  onClick={handleOrder}
                  className='col-span-4 col-start-1 flex justify-center border border-red bg-[#FDF3F4] py-4 text-red'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='mr-3 h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                  </svg>
                  Thêm vào giỏ hàng
                </button>
                <button className='col-span-3 col-start-5 bg-red text-white'>Mua hàng</button>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl rounded-sm bg-white p-7 text-sm'>
          <div className='bg-[#f5f5f5] p-5 text-xl font-bold uppercase'>chi tiết sản phẩm</div>
          <div className='p-5' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
