import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import clienteAxios from '../../config/clienteAxios'
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'

const AnimalesId = () => {
  const [pet, setPet] = useState([])
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
          setPet(data)
        } else {
          const { data } = await clienteAxios.get(`/animales/${id}`, config)
          setPet(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getPet()
  }, [id, token, role])
  return (
    <main className='h-screen bg-[#CCC4BB] flex'>
      <Sidebar />
      <div className='flex flex-col w-full h-full'>
        <div className=''>
          <TopBar />
        </div>
        <div className='grid '>
          <h3 className='text-center text-2xl p-5 font-bold text-white'>
            {pet.nombre}
          </h3>
          <div className='grid gap-5 lg:flex lg:w-full xl:px-28 '>
            <div className='bg-white rounded-lg p-5 mx-5 grid justify-items-center lg:w-1/3'>
              <img
                src={pet.image}
                alt={pet.nombre}
                className='rounded-lg lg:h-full'
              />
            </div>
            <div className='bg-white rounded-lg mx-5 p-5 text-center lg:w-2/3 grid'>
              <p>
                Especie: <b className='capitalize'>{pet.especie}</b>
              </p>
              <p>
                Raza: <b className='capitalize'>{pet.raza}</b>
              </p>
              <p>
                Edad: <b className='capitalize'>{pet.edad}</b>
              </p>
              <p>
                Tamaño: <b className='capitalize'>{pet.tamaño}</b>
              </p>
              <p>
                Peso: <b className='capitalize'>{pet.peso} kg</b>
              </p>
              <p>
                Personalidad: <b className='capitalize'>{pet.personalidad}</b>
              </p>
              <p>
                Salud: <b className='capitalize'>{pet.salud}</b>
              </p>
              <div className='grid justify-items-center mt-4'>
                {pet.estado ? (
                  <Link
                    to={`https://wa.me/+5491131496472?text=Hola%20me%20gustaría%20saber%20más%20sobre%20${pet.nombre}`}
                    className='w-1/2 bg-[#FFB800] rounded-lg mx-5 text-white font-bold text-xl p-2 text-center '>
                    Transitar
                  </Link>
                ) : (
                  <Link
                    className='w-1/2  bg-[#af8f3e] rounded-lg mx-5 text-white font-bold text-xl p-2 text-center cursor-not-allowed'
                    style={{ pointerEvents: 'none' }}>
                    No disponible
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AnimalesId
