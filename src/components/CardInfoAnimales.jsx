import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import clienteAxios from '../config/clienteAxios'
import Spinner from './Spinner'
import useRefugio from '../hooks/useRefugio'
import cancelar from '../assets/cancelar.svg'
import useAuth from '../hooks/useAuth'

const CardInfoAnimales = () => {
  const { auth } = useAuth()
  console.log(auth)
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const [cargando, setCargando] = useState(false)
  const [pet, setPet] = useState([])
  useEffect(() => {
    if (role === 'usuario') {
      setCargando(true)

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
          setCargando(false)
        } catch (error) {
          console.log(error)
        }
      }
      getPet()
    }
  }, [role, token])

  const eliminarAnimal = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      await clienteAxios.post(`/eliminar-animal/${pet._id}`, config)
      const { data } = await clienteAxios.get('/animales', config)
      setPet(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex w-full  sm:w-[46rem] h-80 mt-7  bg-[#E6E2DD] rounded-2xl items-center justify-center'>
      {cargando ? (
        <Spinner />
      ) : role === 'refugio' ? (
        <div className='w-full p-10'>
          <h2 className='text-center font-bold text-3xl'>
            Cantidad de Mascotas{' '}
          </h2>
          <div className='grid text-center gap-10 mt-6'>
            <h3 className='text-center font-bold text-xl '>
              {pet?.length === 0
                ? 'No Tienes Macosta en tu refugio'
                : `Tienes un total de ${pet?.length} Mascotas`}
            </h3>
            <Link to='/register-animales'>
              <button className='bg-[#E59D1C] text-white uppercase rounded-lg px-4 py-2 font-bold text-xl mr-10'>
                Agregar
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className=' w-full overflow-auto'>
          <div className='mb-10'>
              <h2 className='font-extrabold text-2xl pt-8 pl-7 mb-2 '>
                Mis mascotas
              </h2>
          

              <div className='grid text-center gap-10 mt-6'>
                <h3 className='text-center font-bold text-xl '>
                  {pet?.length === 0
                    ? 'No Tienes Macosta en tu refugio'
                    : `Tienes un total de ${pet?.length} Mascotas`}
                </h3>
                <Link to='/register-animales'>
                  <button className='bg-[#E59D1C] text-white uppercase rounded-lg px-4 py-2 font-bold text-xl mr-10'>
                    Agregar
                  </button>
                </Link>
              </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default CardInfoAnimales
