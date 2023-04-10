import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainLayout from './layouts/MainLayout'
import './index.css'
import { useCallback, useContext, useEffect } from 'react'
import { Context } from './context/AppContext'
import Profile from './pages/Profile'
import { PathRoute } from './constants/PathRoute'
import ProductDetail from './pages/ProductDetail'
import { eventTarget } from './utils/LocalStorage'
import Cart from './pages/Cart'

function ProtectedRoute() {
  const { isAuth } = useContext(Context)
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuth, setUser } = useContext(Context)
  return !isAuth ? <Outlet /> : <Navigate to='/' />
}

function App() {
  const { setUser } = useContext(Context)
  const resetUser = useCallback(() => {
    setUser(null)
  }, [])

  useEffect(() => {
    eventTarget.addEventListener('resetUser', resetUser)

    return () => {
      eventTarget.removeEventListener('resetUser', resetUser)
    }
  }, [setUser])

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<ProductList />} />
          <Route path={`/:${PathRoute.idNameProduct}`} element={<ProductDetail />} />
        </Route>

        <Route path='' element={<ProtectedRoute />}>
          <Route path='/' element={<MainLayout />}>
            <Route path={PathRoute.cart} element={<Cart />} />
            <Route path={`${PathRoute.profile}`} element={<Profile />} />
          </Route>
        </Route>

        <Route path='' element={<RejectedRoute />}>
          <Route path='/' element={<RegisterLayout />}>
            <Route path={PathRoute.login} element={<Login />} />
            <Route path={PathRoute.register} element={<Register />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
