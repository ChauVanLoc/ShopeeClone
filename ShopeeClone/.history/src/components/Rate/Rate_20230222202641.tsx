import React, { ReactHTML } from 'react'
type RateProps = {
  Element?: keyof ReactHTML
  rate: number
  size: number
}

function Rate({ Element = 'div', rate, size }: RateProps) {
  const rest = rate - Math.floor(rate)
  return (
    <Element>
      <div className='relative flex'>
        {Array(5)
          .fill(0)
          .map((s, index) => (
            <div className={`w-[${size}px] h-[${size}px]`} key={index}>
              <svg className='stroke-current' enableBackground='new 0 0 15 15' viewBox='0 0 15 15' role='img'>
                <path
                  d='m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
            </div>
          ))}
      </div>
      <div className='absolute top-0 left-0 flex'>
        {Array(Math.floor(rate))
          .fill(0)
          .map((s, index) => (
            <div className={`w-[${size}px] h-[${size}px] fill-yellow-300`} key={index}>
              <svg className='stroke-current' enableBackground='new 0 0 15 15' viewBox='0 0 15 15' role='img'>
                <path
                  d='m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
            </div>
          ))}
      </div>
    </Element>
  )
}

export default Rate
