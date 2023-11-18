import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { GoogleMapParameters } from './types'

export const GoogleMapLocation = (props: GoogleMapParameters) => {
  const {
    latitude = 12.92575,
    longitude = 77.61608,
    zoomLevel = 15,
    width = '100%',
    height = 500,
    markerTitle = 'Bengaluru, India',
  } = props

  const center = {
    lat: latitude,
    lng: longitude,
  }

  const containerStyle = {
    width,
    height,
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoomLevel}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker title={markerTitle} position={center} />
    </GoogleMap>
  ) : (
    <></>
  )
}
