import React from 'react'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'

function ProductList() {
  return (
    <div className='mx-auto mt-5 flex max-w-7xl'>
      <div className='mr-8 w-[20%]'>
        <Aside />
      </div>
      <div className='flex w-[80%] flex-col'>
        <Sort />
        <div className='ml-[-3px] flex flex-wrap'>
          <Product classNameBlock='mt-4 rounded-sm shadow-sm' />
        </div>
      </div>
    </div>
  )
}

export default ProductList
