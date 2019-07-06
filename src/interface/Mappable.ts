export interface Ｍappable {
  location: {
    lat: number,
    lng: number
  }
  markerContent(): string
}