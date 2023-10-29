/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('refugio')
  console.log(user);
  const [auth, setAuth] = useState({})
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setCargando(false)
        return
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      try {
        const { data } = await clienteAxios.post(`/${user}/perfil`, config)
        console.log(data)
        setAuth(data)
        setCargando(false)
        navigate('/dashboard')
      } catch (error) {
        setAuth({})
      }
    }
    autenticarUsuario()
  }, [data])
  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
export default AuthContext
