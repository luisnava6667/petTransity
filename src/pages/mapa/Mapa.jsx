/* eslint-disable react-hooks/exhaustive-deps */

// import spinner from '@/assets/spinner.svg'
import useRefugio from '../../hooks/useRefugio'
import TopBar from '../../components/TopBar'
import Sidebar from '../../components/Sidebar'
import { MapaContainer } from './components/MapaContainer'


const Mapa = () => {
  const { refugios } = useRefugio()
  return (
    <main className='h-screen bg-[#CCC4BB] flex'>
      <Sidebar />
      <div className='flex flex-col w-full h-full bg-[#CCC4BB]'>
        <div className=''>
          <TopBar />
        </div>

        <div className='flex gap-6 justify-center h-5/6'>
          <div className='w-1/3 grid '>
            <div className='grid gap-5 pr-8 pl-4'>
              <h2 className='font-extrabold text-3xl pt-8 pl-7 mb-2 '>
                Refugios
              </h2>
              <p className='px-7 text-sm'>
                Encuentra un refugio cerca de tu zona, puedes solicitar hacer
                transito, adoptar un animal o colaborar con un donativo{' '}
              </p>
            </div>
            <div className='mx-3 overflow-auto gap-5'>
              {refugios.map((refugio) => (
                <div
                  key={refugio._id}
                  className=' gap-5 bg-white rounded-lg flex mb-3'>
                  <img src={refugio.img} width={200} height={200} alt='1' />
                  <div className='grid justify-items-center'>
                    <div className='grid '>
                      <h3 className='text-center text-xl mb-3 font-bold capitalize'>
                        {refugio.razon_social}
                      </h3>
                      <p className='mb-7'>
                        Refugio de animales dirigido por veterinarios.
                      </p>
                      <div className='mb-5'>
                        <p>
                          Direccion:{' '}
                          {`${refugio.direccion}, ${refugio.provincia}`}
                        </p>
                        <p>Telefono: {refugio.whatsApp}</p>
                      </div>
                    </div>
                    <div className='flex gap-5'>
                      <button className='border-black border-2 rounded-lg w-[6.7rem] h-6 text-xs'>
                        Ver ubicación
                      </button>
                      <button className='bg-[#E59D1C] rounded-lg w-[6.7rem] h-6 text-xs'>
                        Contactar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=' w-2/3 h-full'>
            <MapaContainer />
          </div>
        </div>
      </div>
      {/* <div
              className={`${spinnerVisibility}  bg-[#CCC4BB] w-full flex justify-center min-h-screen`}>
              <img src={spinner} />
            </div> */}
    </main>
  )
}

export default Mapa
