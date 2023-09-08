export interface Root {
  status: string
  code: number
  total: number
  data: Daum[]
}

export interface Daum {
  id: number
  name: string
  email: string
  vat: string
  phone: string
  country: string
  addresses: Address[]
  website: string
  image: string
  contact: Contact
}

export interface Address {
  id: number
  street: string
  streetName: string
  buildingNumber: string
  city: string
  zipcode: string
  country: string
  county_code: string
  latitude: number
  longitude: number
}

export interface Contact {
  id: number
  firstname: string
  lastname: string
  email: string
  phone: string
  birthday: string
  gender: string
  address: Address2
  website: string
  image: string
}

export interface Address2 {
  id: number
  street: string
  streetName: string
  buildingNumber: string
  city: string
  zipcode: string
  country: string
  county_code: string
  latitude: number
  longitude: number
}
