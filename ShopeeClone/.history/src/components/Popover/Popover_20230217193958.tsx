import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFloating, arrow, shift } from '@floating-ui/react-dom'
import { FloatingPortal } from '@floating-ui/react'

type PopoverProps = {
  classNameArrow: string
  children: React.ReactNode
}

function Popover({ children }: PopoverProps) {
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const { x, y, strategy, refs, middlewareData } = useFloating({
    middleware: [
      shift(),
      arrow({
        element: arrowRef
      })
    ],
    placement: 'bottom-end'
  })
  const onMouseEnterHandle = () => {
    setIsOpen(true)
  }
  const onMouseLeaveHandle = () => {
    setIsOpen(false)
  }
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
            {children}
          </div>
        )}
      </FloatingPortal>
    </div>
  )
}

export default Popover
