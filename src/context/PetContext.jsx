'use client'
import { createContext, useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useSession } from 'next-auth/react'

const PetContext = createContext()

const PetProvider = ({ children }) => {
  const { data } = useSession()
  console.log(data?.user.token)
  const [pet, setPet] = useState([])
  console.log(pet)
  useEffect(() => {
    const getPet = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data?.user.token}`
          }
        }
        const { data: pets } = await clienteAxios.get('/animales', config)
        setPet(pets)
      } catch (error) {
        console.log(error)
      }
    }
    getPet()
  }, [data])

  return <PetContext.Provider value={{}}>{children}</PetContext.Provider>
}

export { PetProvider }
export default PetContext
