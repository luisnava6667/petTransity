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
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }
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
      await clienteAxios.delete(`animales/myPet/${id}`, config)
      Swal.fire({
        icon: 'success',
        title: 'Animal Eliminado Correctamente',
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      })
      setTimeout(() => {
        navigate('/animales')
      }, 3000)
      setTimeout(() => {
        Swal.close()
      }, 4000)
    } catch (error) {
      console.log(error)
    }
  }
  const nuevoAnimal = async (values) => {
    if (!token) return
    try {
      await clienteAxios.post('/animales', values, config)
      Swal.fire({
        icon: 'success',
        title: 'Animal Registrado Correctamente',
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      })
      setTimeout(() => {
        navigate('/animales')
      }, 3000)
      setTimeout(() => {
        Swal.close()
      }, 4000)
    } catch (error) {
      console.log(error.response.data.msg)
    }
  }
  const editarAnimal = async (values) => {
    if (!token) return
    try {
      await clienteAxios.put(`animales/myPet/${values._id}`, values, config)
      Swal.fire({
        icon: 'success',
        title: 'Animal Editado Correctamente',
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      })
      setTimeout(() => {
        navigate('/animales')
      }, 3000)
      setTimeout(() => {
        Swal.close()
      }, 4000)
    } catch (error) {
      console.log(error)
    }
  }
  const submitAnimal = async (animal) => {
    if (animal._id) {
      await editarAnimal(animal)
    } else {
      await nuevoAnimal(animal)
    }
  }
  return (
    <RefugioContext.Provider
      value={{
        refugios,
        submitAnimal,
        eliminarAnimal,
        editarAnimal,
        nuevoAnimal
      }}>
      {children}
    </RefugioContext.Provider>
  )
}

export { RefugioProvider }
export default RefugioContext
