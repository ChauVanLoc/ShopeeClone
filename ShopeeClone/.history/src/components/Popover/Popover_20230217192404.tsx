import React from 'react'

type PopoverProps = {
  children: React.ReactNode
}

function Popover({ children }: PopoverProps) {
  return (
    <div
      className='px-3 py-1'
      ref={refs.setReference}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      <span>Ngôn ngữ</span>
      <FloatingPortal>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content'
            }}
            className='relative'
          >
            <span
              style={{
                left: middlewareData.arrow?.x,
                top: middlewareData.arrow?.y
              }}
              ref={arrowRef}
              className='translate-l-[-50%] absolute top-[-16%] border-[6px] border-solid border-white border-x-transparent border-t-transparent'
            />
            <div className={'flex flex-col rounded-sm bg-white py-3 pr-16 pl-3 text-[12px] text-gray-800 shadow-md'}>
              <button className='mb-3 hover:text-header'>Tiếng Việt</button>
              <button className='hover:text-header'>Tiếng Anh</button>
            </div>
          </div>
        )}
      </FloatingPortal>
    </div>
  )
}

export default Popover
