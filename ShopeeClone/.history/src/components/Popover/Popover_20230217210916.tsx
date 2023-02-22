import { ReactNode, useId, useRef, useState } from 'react'
import { useFloating, arrow, shift, flip, offset } from '@floating-ui/react-dom'
import { FloatingPortal } from '@floating-ui/react'

type PopoverProps = {
  classNameBlock: string
  classNameArrow: string
  offset: Number
  as: ReactNode
  children: ReactNode
}

function Popover({ classNameBlock, classNameArrow, offset, as, children }: PopoverProps) {
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const idFloatingPortal = useId()
  const { x, y, strategy, refs, middlewareData } = useFloating({
    middleware: [
      shift(),
      offset(),
      flip(),
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
      className={classNameBlock}
      ref={refs.setReference}
      onMouseEnter={onMouseEnterHandle}
      onMouseLeave={onMouseLeaveHandle}
    >
      {as}
      <FloatingPortal id={idFloatingPortal}>
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
              className={classNameArrow}
            />
            {children}
          </div>
        )}
      </FloatingPortal>
    </div>
  )
}

export default Popover
