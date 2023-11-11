import axios from 'axios'
import { useEffect, useState } from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api'
import useRefugio from '../../../hooks/useRefugio'

export const MapaContainer = ({ refu }) => {
  // console.log(refu)
  const [locations, setLocations] = useState([])
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [mapHeight, setMapHeight] = useState('50rem')

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
          const addresName = response.data.results[0].formatted_address
          const location = response.data.results[0].geometry.location
          return { location, addresName }
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
        <MarkerF
          key={index}
          position={location.location} // Use location.location instead of location[0]
          //
          title={`Refugio ubicado en: \n ${location.addresName}` || 'Refugio'}
          subtitle={'asdadasd'}
          additionalInfo={'aksdnlakds'}
        />
      ))}
    </GoogleMap>
  )
}
