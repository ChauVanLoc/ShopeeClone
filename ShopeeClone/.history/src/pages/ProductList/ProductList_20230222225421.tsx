import React from 'react'
import Rate from 'src/components/Rate'
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
        <Product />
        <Rate Element='div' rating={3.4} />
      </div>
    </div>
  )
}

export default ProductList
