import { Route, Routes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element={<RegisterLayout />} />
      </Routes>
    </div>
  )
}

export default App
