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
        <div className='grid grid-cols-5 gap-x-4 gap-y-1'>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Product
                key={i}
                classNameBlock='hover:translate-y-[-3px] duration-[0.3s] text-sm mt-4 rounded-sm shadow-md bg-white'
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
