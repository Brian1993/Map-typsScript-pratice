import faker from 'faker'
import { Ｍappable } from './interface/Mappable'
export class User implements Ｍappable {
  name: string
  location: {
    lat: number,
    lng: number
  }

  constructor () {
    this.name = faker.name.findName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.latitude()
    }
  }

  markerContent () : string {
    return `User Name: ${this.name}`
  }
}
