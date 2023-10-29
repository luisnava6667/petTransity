import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './pages/404/NotFound'
import Home from './pages/home/Home'
import Donar from './pages/donar/Donar'
import Login from './pages/login/Login'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/dashboard/Dashboar'
import Mapa from './pages/mapa/Mapa'
import { RefugioProvider } from './context/RefugioContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RefugioProvider>
          <Routes>
            <Route
              path='/re'
              element={<main className='bg-red-950'>asdasdasdasdasdHome</main>}
            />
            <Route path='/register' element={<Donar />} />
            <Route path='/login' element={<Login />} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/mapa' element={<Mapa />} />
            <Route path='/donar' element={<Donar />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </RefugioProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
