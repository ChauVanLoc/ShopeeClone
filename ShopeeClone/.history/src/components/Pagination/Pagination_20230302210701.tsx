import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface Props {
  page: number
  pageSize: number
  stringPagination: (page: number) => string
  range?: number
}

/**
Với range = 2 áp dụng cho khoảng cách đầu, cuối và xung quanh current_page

[1] 2 3 ... 19 20
1 [2] 3 4 ... 19 20 
1 2 [3] 4 5 ... 19 20
1 2 3 [4] 5 6 ... 19 20
1 2 3 4 [5] 6 7 ... 19 20

1 2 ... 4 5 [6] 8 9 ... 19 20

1 2 ...13 14 [15] 16 17 ... 19 20


1 2 ... 14 15 [16] 17 18 19 20
1 2 ... 15 16 [17] 18 19 20
1 2 ... 16 17 [18] 19 20
1 2 ... 17 18 [19] 20
1 2 ... 18 19 [20]
 */

export default function Pagination({ page, pageSize, stringPagination, range = 2 }: Props) {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span key={index} className='mx-2 cursor-not-allowed rounded border bg-white px-3 py-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='mx-2 rounded border bg-white px-3 py-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1

        // Điều kiện để return về ...
        if (page <= range * 2 + 1 && pageNumber > page + range && pageNumber < pageSize - range + 1) {
          return renderDotAfter(index)
        } else if (page > range * 2 + 1 && page < pageSize - range * 2) {
          if (pageNumber < page - range && pageNumber > range) {
            return renderDotBefore(index)
          } else if (pageNumber > page + range && pageNumber < pageSize - range + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - range * 2 && pageNumber > range && pageNumber < page - range) {
          return renderDotBefore(index)
        }

        return (
          <Link
            to={stringPagination(pageNumber)}
            key={index}
            className={classNames('mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm', {
              'border-cyan-500': pageNumber === page,
              'border-transparent': pageNumber !== page
            })}
          >
            {pageNumber}
          </Link>
        )
      })
  }
  return (
    <div className='mt-6 flex flex-wrap justify-center'>
      <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2  shadow-sm'>Prev</button>
      {renderPagination()}
      <button className='mx-2 cursor-pointer rounded border bg-white px-3 py-2  shadow-sm'>Next</button>
    </div>
  )
}
