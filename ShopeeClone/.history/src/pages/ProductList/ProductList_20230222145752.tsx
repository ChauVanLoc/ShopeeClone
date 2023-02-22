import React from 'react'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'

function ProductList() {
  return (
    <div className='mx-auto flex max-w-7xl'>
      <div className='mr- w-[20%]'>
        <Aside />
      </div>
      <div className='flex w-[80%] flex-col'>
        <Sort />
        <Product />
      </div>
    </div>
  )
}

export default ProductList
