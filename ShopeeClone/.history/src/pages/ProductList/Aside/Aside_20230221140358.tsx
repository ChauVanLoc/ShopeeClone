import React from 'react'
import { Link } from 'react-router-dom'

function Aside() {
  return (
    <div className='p-3'>
      <div>
        <div>
          <Link to={''} className='capitalize'>
            <svg viewBox='0 0 12 10' className='shopee-svg-icon shopee-category-list__header-icon icon-all-cate'>
              <g fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-373 -208)'>
                  <g transform='translate(155 191)'>
                    <g transform='translate(218 17)'>
                      <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                      <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                      <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Tất cả danh mục
          </Link>
        </div>
        <div>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
        </div>
      </div>
      <div>
        <div>
          <Link to={''}></Link>
        </div>
        <div>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
        </div>
      </div>
      <div>
        <div>
          <Link to={''}></Link>
        </div>
        <div>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
        </div>
      </div>
      <div>
        <div>
          <Link to={''}></Link>
        </div>
        <div>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
          <Link to={''}></Link>
        </div>
      </div>
    </div>
  )
}

export default Aside
