import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'
import clienteAxios from '../../config/clienteAxios'
import { Link } from 'react-router-dom'

const Animales = () => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
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
        if (role === 'refugio') {
          const { data } = await clienteAxios.get('/animales/myPets', config)
          setPet(data)
        } else {
          const { data } = await clienteAxios.get('/animales', config)
          setPet(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getPet()
  }, [token])
  return (
    <main className='h-screen bg-[#CCC4BB] flex'>
      <Sidebar />
      <div className='flex flex-col w-full h-full'>
        <div className=''>
          <TopBar />
        </div>
        <div className=' w-full '>
          <div className='mb-10'>
            <h2 className='font-extrabold text-2xl pt-8 pl-7 mb-2 '>
              Animales refugiados
            </h2>
            <p className='px-14 text-xl'>
              {role === 'refugio'
                ? 'Aqui veras tus animales que posees'
                : 'Encuentra un refugio cerca de tu zona, puedes solicitar hacer transito, adoptar un animal o colaborar con un donativo'}
            </p>
          </div>
          <div className='grid grid-cols-5 gap-5 pr-8 pl-4'>
            {pet?.map((pet) => (
              <div
                key={pet._id}
                className='bg-white rounded-lg flex items-center justify-evenly'>
                <div>
                  <img src={pet.image} width={100} height={100} />
                </div>
                <div className='grid justify-items-center my-3'>
                  <div className='grid'>
                    <h3 className='text-center text-xl mb-3 font-bold capitalize'>
                      {pet.nombre}
                    </h3>
                  </div>
                  <div className='flex gap-5'>
                    <Link
                      to={`/animales/${pet._id}`}
                      className='border-black border-2 px-4 rounded-lg font-bold'>
                      {role === 'refugio' ? 'Editar' : 'Ver'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Animales

//         {/* {pet.map(pet=>{
//           return(
//             <>
//               <p>{pet}</p>
//             </>
//           )
//         })} */}

//         {/* </div> */}
//         <div className=' w-2/3'>
//           <div className={`  bg-[#CCC4BB] w-full flex justify-center `}>
//             {/* <Image src={spinner} /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   </main>
// )
// }
