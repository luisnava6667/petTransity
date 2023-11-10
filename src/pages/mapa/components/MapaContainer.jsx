import axios from 'axios'
import { useEffect, useState } from 'react'
import { GoogleMap, MarkerF, OverlayView } from '@react-google-maps/api'
import useRefugio from '../../../hooks/useRefugio'

export const MapaContainer = () => {
  const [locations, setLocations] = useState([])
  const [mapVisibility, setMapVisibility] = useState('hidden')
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [mapHeight, setMapHeight] = useState('57rem')
  const [selectedMarker, setSelectedMarker] = useState(null)
  console.log(selectedMarker)
  useEffect(() => {
    screenWidth <= 768 && setMapHeight('20rem')
  }, [])
  const { refugios } = useRefugio()
  const apiKey = `${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
  const direccion = refugios.map(
    (refugio) => refugio.direccion + ',' + refugio.provincia
  )
  const mapStyles = {
    height: mapHeight,
    width: '100%',
    display: mapVisibility
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
  }, [apiKey])
  return (
    <GoogleMap
      mapContainerClassName='rounded-lg '
      mapContainerStyle={mapStyles}
      zoom={13}
      center={{ lat: -34.595369, lng: -58.436764 }}
      options={mapOptions}>
      {locations.map((location, index) => (
        <MarkerF key={index} position={location} />
      ))}

      {selectedMarker && (
        <OverlayView
          position={selectedMarker.position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div className=''>
            <div>{selectedMarker.title}</div>
            {/* <button onClick={handleCloseInfoWindow}>Cerrar</button> */}
          </div>
        </OverlayView>
      )}
    </GoogleMap>
  )
}
