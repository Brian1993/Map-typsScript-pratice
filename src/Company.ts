import faker from 'faker'
import { Ｍappable } from './interface/Mappable'

export class Company implements Ｍappable {
  companyName: string
  catchPhrase: string
  location: {
    lat: number,
    lng: number
  }
  constructor () {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent () : string {
    return `
    <h1>Company Name: ${this.companyName}</h1>
    <p>Catch Phrase: ${this.catchPhrase}</p>
    `
  }
}