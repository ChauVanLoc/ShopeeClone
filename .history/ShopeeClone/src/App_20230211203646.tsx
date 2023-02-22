import { Route, Routes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path=''
          element={
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          }
        />
      </Routes>
    </div>
  )
}

export default App
