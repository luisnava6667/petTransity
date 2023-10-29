import { useEffect, useState } from 'react'
import {
  GoogleMap,
  MarkerF,
  LoadScript
  //   OverlayView,
  //   InfoWindow
} from '@react-google-maps/api'
import useRefugio from '../hooks/useRefugio'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import axios from 'axios'
import Image from 'next/image'
import spinner from '@/assets/spinner.svg'

const Mapa = () => {
  const apiKey = `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

  const { refugios } = useRefugio()
  const [locations, setLocations] = useState([])
  console.log(locations)
  const [mapVisibility, setMapVisibility] = useState('hidden')
  const [spinnerVisibility, setSpinnerVisibility] = useState('flex')
  const direccion = refugios.map(
    (refugio) => refugio.direccion + ',' + refugio.provincia
  )
  console.log(direccion)
  const mapStyles = {
    height: '100%',
    width: '100%'
    // display: mapVisibility
  }
  const mapOptions = {
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    gestureHandling: 'cooperative'
  }
  useEffect(() => {
    const addresstoGeometry = async (addresses) => {
      try {
        const promises = addresses.map(async (address) => {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
          )
          const location = response.data.results[0].geometry.location
          // setSpinnerVisibility('hidden')
          // setMapVisibility('flex')
          console.log(location)
          return location
        })
        const resolvedLocations = await Promise.all(promises)
        setLocations([...locations, ...resolvedLocations])
      } catch (error) {
        console.log(error)
      }
    }
    addresstoGeometry(direccion)
  }, [refugios])

  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full bg-[#CCC4BB]'>
        <TopBar />
        <div className='flex w-full h-screen'>
          <div className=' w-1/3 bg-[#CCC4BB] h-screen overflow-auto '>
            <div className=''>
              <h2 className='font-extrabold text-3xl pt-8 pl-7 mb-2 '>
                Refugios
              </h2>
              <p className='px-7 text-sm'>
                Encuentra un refugio cerca de tu zona, puedes solicitar hacer
                transito, adoptar un animal o colaborar con un donativo{' '}
              </p>
            </div>
            <div className='grid gap-5 pr-8 pl-4'>
              {refugios.map((refugio) => (
                <div key={refugio._id} className='bg-white rounded-lg flex'>
                  <div>
                    <Image src={refugio.img} width={200} height={200} alt='1' />
                  </div>
                  <div className='grid justify-items-center my-3'>
                    <div className='grid'>
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
          <div className=' w-2/3 h-screen'>
            {/* <div
              className={`${spinnerVisibility}  bg-[#CCC4BB] w-full flex justify-center min-h-screen`}>
              <Image src={spinner} />
            </div> */}

            <LoadScript
              googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={{ lat: -34.595369, lng: -58.436764 }}
                options={mapOptions}>
                {locations.map((location, index) => (
                  <MarkerF key={index} position={location} />
                ))}

                {/* {selectedMarker && (
                  <OverlayView
                  position={selectedMarker.position}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                  <div className=''>
                  <div>{selectedMarker.title}</div>
                  <button onClick={handleCloseInfoWindow}>Cerrar</button>
                  </div>
                  </OverlayView>
                )} */}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Mapa
