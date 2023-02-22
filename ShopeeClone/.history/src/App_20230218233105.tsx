import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainLayout from './layouts/MainLayout'
import './index.css'
import { useContext } from 'react'
import { Context } from './context/AppContext'
import Profile from './pages/Profile'

function ProtectedRoute() {
  const { isAuth } = useContext(Context)
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuth } = useContext(Context)
  return isAuth ? <Navigate to='/' /> : <Outlet />
}

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path=''
          index
          element={
            <MainLayout>
              <ProductList />
            </MainLayout>
          }
        />
        <Route path='' element={<RejectedRoute />}>
          <Route
            path='/register'
            element={
              <RegisterLayout>
                <Register />
              </RegisterLayout>
            }
          />
          <Route
            path='/login'
            element={
              <RegisterLayout>
                <Login />
              </RegisterLayout>
            }
          />
        </Route>
        <Route path='' element={<ProtectedRoute />}>
          <Route
            path='/profile'
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
