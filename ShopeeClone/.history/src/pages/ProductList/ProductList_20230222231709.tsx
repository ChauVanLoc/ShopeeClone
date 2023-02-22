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
        <div className='grid grid-cols-4 gap-2'>
          {Array(10)
            .fill(0)
            .map((e) => (
              <Product classNameBlock='mt-4 rounded-sm shadow-sm' />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
