import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import clienteAxios from '../../config/clienteAxios'
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'

const AnimalesId = () => {
  const [pet, setPet] = useState([])
  const [refugio, setRefugio] = useState([])
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
          const {
            data: { pet, refugio }
          } = await clienteAxios.get(`/animales/view/${id}`, config)
          console.log(refugio)
          setPet(pet)
          setRefugio(refugio)
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
        <div className='grid justify-items-center overflow-auto'>
          <h3 className='text-center text-2xl md:text-5xl p-5 font-bold text-[#503734]'>
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
                {role === 'usuarios' ? (
                  pet.estado ? (
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
                  )
                ) : (
                  <div className='w-full'>
                    <Link
                      to={`/animales/edit/${pet._id}`}
                      className='w-1/2 bg-[#FFB800] rounded-lg mx-5 text-white font-bold text-xl p-2 text-center '>
                      Editar
                    </Link>
                    <Link
                      to={`/animales/delete/${pet._id}`}
                      className='w-1/2  bg-red-500 rounded-lg mx-5 text-white font-bold text-xl p-2 text-center '>
                      Eliminar
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='gap-5 md:w-3/4 w-full xl:px-28 my-5'>
            {role === 'usuarios' && (
              <div className='bg-white rounded-lg p-5 mx-5 grid justify-items-center '>
                <h3 className='text-center text-2xl md:text-5xl p-5 font-bold text-[#503734]'>
                  Refugio
                </h3>
                <div className='md:flex justify-evenly w-full grid items-center'>
                  <img
                    className='rounded-lg h-44'
                    src={refugio.img}
                    alt='refugio'
                  />
                  <div>
                    <p>
                      Razon social:
                      <b className='capitalize'> {refugio.razon_social}</b>
                    </p>
                    <p>
                      Direccion:
                      <b className='capitalize'>
                        {`${refugio.direccion}, ${refugio.provincia}`}
                      </b>
                    </p>
                    <p>
                      Telefono:{' '}
                      <b className='capitalize'> {refugio.whatsApp}</b>
                    </p>
                    <p>
                      Email: <b className='capitalize'> {refugio.email}</b>
                    </p>
                    <div className='grid justify-items-center mt-4'>
                      <Link
                        to={`https://wa.me/+5491131496472?text=Hola%20me%20gustaría%20saber%20más%20sobre%20${pet.nombre}`}
                        className='w-1/2 bg-[#FFB800] rounded-lg mx-5 text-white font-bold text-xl p-2 text-center '>
                        Contactar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default AnimalesId
