import { Component, ErrorInfo, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Uncaught error: ', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <main className='flex h-screen w-full flex-col items-center justify-center'>
          <h3 className='font-mono text-3xl font-bold'>Có Lỗi rồi 😥😥</h3>
          <h1 className='text-9xl font-extrabold tracking-widest text-gray-900'>
            500
          </h1>
          <div className='bg-orange absolute rotate-12 rounded bg-primary px-2 text-lg text-white'>
            Error
          </div>
          <button className='mt-5 rounded-sm text-primary shadow-md duration-300 ease-linear hover:bg-primary/90 hover:text-product'>
            <a
              href='/'
              className='group relative inline-block text-xl font-medium focus:outline-none focus:ring active:text-orange-500'
            >
              <span className='bg-orange absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-y-0 group-hover:translate-x-0' />
              <span className='relative block border border-current px-8 py-3'>
                <span>Về lại trang chủ</span>
              </span>
            </a>
          </button>
        </main>
      )
    }

    return this.props.children
  }
}
