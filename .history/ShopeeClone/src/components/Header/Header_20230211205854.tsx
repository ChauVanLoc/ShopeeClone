import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <nav className='flex items-end'>
          <Link to={''} className></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
