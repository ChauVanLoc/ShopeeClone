import React from 'react'
type RateProps = {
  rate: number
}

function Rate({ rate }: RateProps) {
  return (
    <div>
      {Array(5)
        .fill(0)
        .map((s, index) => (
          <div key={index}></div>
        ))}
    </div>
  )
}

export default Rate
