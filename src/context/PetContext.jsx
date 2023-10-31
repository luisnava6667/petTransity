/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const PetContext = createContext()

const PetProvider = ({ children }) => {
  const token = localStorage.getItem('token')
  const [pet, setPet] = useState([])

  console.log(pet)
  useEffect(() => {
    const getPet = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
        const { data } = await clienteAxios.get('/animales', config)
        setPet(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPet()
  }, [ token])

  return <PetContext.Provider value={{ pet }}>{children}</PetContext.Provider>
}

export { PetProvider }
export default PetContext
