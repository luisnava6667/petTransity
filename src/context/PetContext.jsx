/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'

const PetContext = createContext()

const PetProvider = ({ children }) => {
 
  const [pet, setPet] = useState([])
 
  console.log(pet)
  useEffect(() => {
    const getPet = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer $`
          }
        }
        const { data: pets } = await clienteAxios.get('/animales', config)
        setPet(pets)
      } catch (error) {
        console.log(error)
      }
    }
    getPet()
  }, [])

  return <PetContext.Provider value={{}}>{children}</PetContext.Provider>
}

export { PetProvider }
export default PetContext
