import { Route, Routes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'

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
    </div>
  )
}

export default App
