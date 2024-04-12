import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private organizationData = {
    name: 'Fancy Fleet Inc.',
    contactNumber: '+1 (555) 000-000',
    address: {
      "streetAddress": "30 Clingstone PL",
      "city": "The Woodlands",
      "state": "TX",
      "postalCode": "77382",
      "country": "USA",
      "phoneNumber": "510-441-9950"
    }
  }

  private servingLocations = [
    {
      airportCode: 'OGG',
      address: {
        "streetAddress": "30 Clingstone PL",
        "city": "The Woodlands",
        "state": "TX",
        "postalCode": "77382",
        "country": "USA",
        "phoneNumber": "510-441-9950"
      }
    },
    {
      airportCode: 'No Airport',
      address: {
        "streetAddress": "30 Clingstone PL",
        "city": "The Woodlands",
        "state": "TX",
        "postalCode": "77382",
        "country": "USA",
        "phoneNumber": "510-441-9950"
      }
    }
  ]

  constructor() { }

  getOrganizationData(): Observable<any> {
    return of(this.organizationData);
  }

  getServingLocations(): Observable<any[]> {
    return of(this.servingLocations);
  }
}

