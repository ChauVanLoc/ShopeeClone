import React from 'react'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'

function ProductList() {
  return (
    <div className='flex'>
      <Aside />
      <div className='flex flex-col'>
        <Sort />
        <Product />
      </div>
    </div>
  )
}

export default ProductList
