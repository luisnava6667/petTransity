import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  GoogleMap,
  Marker,
  MarkerF,
  OverlayView,
  OverlayViewF
} from '@react-google-maps/api'
import useRefugio from '../../../hooks/useRefugio'

export const MapaContainer = () => {
  const [locations, setLocations] = useState([])
  // const [mapVisibility, setMapVisibility] = useState('hidden')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [mapHeight, setMapHeight] = useState('50rem')
  const [selectedMarker, setSelectedMarker] = useState(null)

  const { refugios } = useRefugio()
  const apiKey = `${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
  const direccion = refugios.map(
    (refugio) => refugio.direccion + ',' + refugio.provincia
  )
  useEffect(() => {
    screenWidth <= 768 && setMapHeight('20rem')
    const addresstoGeometry = async (addresses) => {
      try {
        const promises = addresses.map(async (address) => {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
          )
          const location = response.data.results[0].geometry.location
          return location
        })
        const resolvedLocations = await Promise.all(promises)
        setLocations([...locations, ...resolvedLocations])
      } catch (error) {
        console.log(error)
      }
    }
    addresstoGeometry(direccion)
  }, [])
  const mapStyles = {
    height: mapHeight,
    width: '100%'
  }
  const mapOptions = {
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    gestureHandling: 'cooperative'
  }

  return (
    <GoogleMap
      mapContainerClassName='rounded-lg '
      mapContainerStyle={mapStyles}
      zoom={13}
      center={{ lat: -34.595369, lng: -58.436764 }}
      options={mapOptions}>
      {locations.map((location, index) => (
        <MarkerF key={index} position={location} title={'hola'} />
      ))}
      <OverlayViewF key={1} position={location}>
        <div className='flex flex-col w-[26rem]  gap-3 pb-4 h-max bg-white rounded-lg flex mb-3'>
          <img
            className='rounded-bl-lg rounded-tl-lg'
            src='https://www.muycomputer.com/wp-content/uploads/2019/01/Google-Maps.jpg'
            width={144}
            height={144}
            alt='1'
          />
          <div className='grid justify-items-center'>
            <div className='grid '>
              <h3 className='text-center text-xl mb-3 font-bold capitalize'>
                Refugio
              </h3>
              <p className=''>Refugio de animales dirigido por veterinarios.</p>
              <div className=''>
                <p>Direccion: {`direccion`}</p>
                <p>Telefono: {`telefono`}</p>
              </div>
            </div>
            <div className='flex w-full'>
              <button
                className='bg-[#E59D1C] text-white rounded-lg w-36 h-10'
                onClick={() => setSelectedMarker(null)}>
                Ver mas
              </button>
            </div>
          </div>
        </div>
      </OverlayViewF>
    </GoogleMap>
  )
}
