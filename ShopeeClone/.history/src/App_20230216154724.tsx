import { Route, Routes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ProductList />} />
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
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
