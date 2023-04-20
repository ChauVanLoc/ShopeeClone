import Pagination from 'src/components/Pagination'
import { useMemo } from 'react'
import { ProductSearch } from 'src/constants/KeySearch'
import useQueryListProduct from 'src/hooks/useQueryListProduct'
import useSearchUrl from 'src/hooks/useSearchUrl'
import { joinKeySearch } from 'src/utils/utils'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'
import { Empty } from 'antd'
import classNames from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { ProductFetching } from 'src/Api/ProductFetching'

const limit = 10

function ProductList() {
  const o = useSearchUrl(limit)
  const getListProduct = useQueryListProduct(o)
  const getListCategory = useQuery({
    queryKey: ['category'],
    queryFn: () => ProductFetching.ListCategoryFetching(),
    staleTime: Infinity
  })
  const ListCateGoryData = useMemo(
    () => getListCategory.data?.data.data,
    [getListCategory]
  )
  const ListProductdata = useMemo(
    () => getListProduct.data?.data.data.products,
    [getListProduct]
  )
  return (
    <div className='bg-[#F5f5f5] py-5'>
      <div className='mx-auto flex max-w-7xl bg-[#F5f5f5]'>
        <div className='mr-8 w-[20%]'>
          {ListCateGoryData && (
            <Aside
              joinKeySearch={joinKeySearch<ProductSearch>(o)}
              ObjectKeySearch={o}
              categories={ListCateGoryData}
            />
          )}
        </div>
        <div className='flex w-[80%] flex-col'>
          <Sort
            SearchParamsObject={o}
            page={o.page as number}
            stringPagination={joinKeySearch(o)}
            pageSize={
              getListProduct.data?.data.data.pagination.page_size as number
            }
          />
          {!getListProduct.data ? (
            <Empty />
          ) : (
            <div
              className={classNames({
                'flex h-[500px] w-[992px] items-center justify-center':
                  ListProductdata?.length === 0,
                'grid grid-cols-5 gap-x-4 gap-y-1':
                  ListProductdata && ListProductdata?.length > 0
              })}
            >
              {ListProductdata?.map((e) => (
                <Product
                  product={e}
                  key={e._id}
                  rating={e.rating}
                  classNameBlock='hover:translate-y-[-3px] duration-[0.2s] text-sm mt-4 rounded-sm shadow-md bg-product'
                />
              ))}
              {ListProductdata?.length === 0 && (
                <Empty
                  description={
                    <span className='text-lg font-medium'>
                      Không tìm thấy sản phẩm nào phù hợp
                    </span>
                  }
                  imageStyle={{ width: 300, height: 300 }}
                />
              )}
            </div>
          )}
          <Pagination
            page={o.page as number}
            stringPagination={joinKeySearch<ProductSearch>(o)}
            pageSize={
              getListProduct.data?.data.data.pagination.page_size as number
            }
          />
        </div>
      </div>
    </div>
  )
}

export default ProductList
