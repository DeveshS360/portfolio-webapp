interface GoogleMapLocationProps {
  latitude: number
  longitude: number
  zoomLevel: number
  width: number | string
  height: number | string
  markerTitle: string
}

export type GoogleMapParameters = Partial<GoogleMapLocationProps>
