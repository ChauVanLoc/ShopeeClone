import React from 'react'
type RateProps = {
  rate: number
  size: number
}

function Rate({ rate, size }: RateProps) {
  return (
    <div>
      <div className='flex'>
        {Array(5)
          .fill(0)
          .map((s, index) => (
            <div className={`w-[${size}px] h-[${size}px]`} key={index}>
              <svg
                enable-background='new 0 0 15 15'
                viewBox='0 0 15 15'
                role='img'
                class='stardust-icon stardust-icon-rating _0ytJnW'
              >
                <path
                  d='m7.5.8l2.2 4.6 4.8.5-3.8 3.2 1.1 5.1-4.3-2.6-4.3 2.6 1.1-5.1-3.8-3.2 4.8-.5z'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-miterlimit='10'
                ></path>
              </svg>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Rate
