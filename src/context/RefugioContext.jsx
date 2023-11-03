/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const RefugioContext = createContext()

const RefugioProvider = ({ children }) => {
  const [refugios, setRefugios] = useState([])
  const role = localStorage.getItem('role')
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    const getRefugios = async () => {
      if (role === 'usuarios') {
        try {
          const { data } = await clienteAxios.get('/refugio/all')
          setRefugios(data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    getRefugios()
  }, [role])
  const eliminarAnimal = async (id) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      await clienteAxios.delete(`animales/myPet/${id}`, config)
      Swal.fire({
        icon: 'success',
        title: 'Animal Eliminado Correctamente',
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
        //auto close the modal
      })
      setTimeout(() => {
        navigate('/dashboard')
      }, 3000)
      setTimeout(() => {
        Swal.close()
      }, 4000)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <RefugioContext.Provider value={{ refugios, eliminarAnimal }}>
      {children}
    </RefugioContext.Provider>
  )
}

export { RefugioProvider }
export default RefugioContext
