import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clienteAxios from '../../config/clienteAxios'

const AnimalesId = () => {
  const [pet, setPet] = useState([])
  console.log(pet)
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const { id } = useParams()
  useEffect(() => {
    const getPet = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
        if (role === 'refugio') {
          const { data } = await clienteAxios.get(
            `/animales/myPet/${id}`,
            config
          )
          console.log(data)
          setPet(data)
        } else {
          const { data } = await clienteAxios.get(`/animales/${id}`, config)
          console.log(data)
          setPet(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getPet()
  }, [id, token, role])
  return (
    <div>
      <div>{pet.nombre}</div>
    </div>
  )
}

export default AnimalesId
