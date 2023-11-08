import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/404/NotFound'
import Home from './pages/home/Home'
import Donar from './pages/donar/Donar'
import Login from './pages/login/Login'
import FormRegisterRefugio from './pages/form-register-refugio/FormRegisterRefugio'
import FormRegisterUser from './pages/form-register-usuario/FormRegisterUser'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/dashboard/Dashboar'
import Mapa from './pages/mapa/Mapa'
import { RefugioProvider } from './context/RefugioContext'
import Confirmar from './pages/confirmar/Confirmar'
import OlvidePassword from './pages/olvide-password/OlvidePassword'
import NuevoPassword from './pages/nuevo-password/NuevoPassword'
import RegisterAnimal from './pages/register-animal/RegisterAnimal'
import Animales from './pages/animales/Animales'
import AnimalesId from './pages/animalesId/AnimalesId'
import PrivateMap from './context/PrivateMap'
import Perfil from './pages/perfil/Perfil'
// import { UserId } from "./pages/userId/UserId";
import EditarAnimal from './pages/editarAnimal/EditarAnimal'
import TyC from './pages/TyC/TyC'
import PoliticasDePrivacidad from './pages/PoliticasDePrivacidad/PoliticasDePrivacidad'
import Register from './pages/register/Register'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RefugioProvider>
          <Routes>
            {/* registros */}
            <Route path='/register-refugio' element={<FormRegisterRefugio />} />
            <Route path='/register-usuario' element={<FormRegisterUser />} />
            <Route path='/register-animales' element={<RegisterAnimal />} />
            {/* <Route path='/register' element={<Register />} /> */}
            <Route path='/donar' element={<Donar />} />
            {/* registros */}
            {/* logeado */}
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route
              path='/mapa'
              element={
                <PrivateMap allowedRoles={['usuarios']} element={<Mapa />} />
              }
            />
            <Route path='confirmar/:token' element={<Confirmar />} />
            <Route path='/animales' element={<Animales />} />
            <Route path='/animales/:id' element={<AnimalesId />} />
            <Route path='/editar-animales/:id' element={<EditarAnimal />} />
            <Route path='/donar' element={<Donar />} />
            <Route path='/registro' element={<Register />} />
            {/* logeado */}
            <Route path='/terms-and-conditions' element={<TyC />} />
            <Route path='/privacy-policy' element={<PoliticasDePrivacidad />} />
            <Route path='/olvide-password' element={<OlvidePassword />} />
            <Route path='perfil' element={<Perfil />} />
            {/* <Route path="editar/:id" element={<UserId />} /> */}
            <Route path='olvide-password/:token' element={<NuevoPassword />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </RefugioProvider>
      </AuthProvider>
      <Routes></Routes>
    </BrowserRouter>
  )
}

export default App
