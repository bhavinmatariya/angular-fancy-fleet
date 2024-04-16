import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

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
    },
    latitude: 30.209685010721643,
    longitude: -95.5494148238209,
  }

  private servingLocations = [
    {
      id: 1,
      airportCode: 'OGG',
      address: {
        "streetAddress": "30 Clingstone PL",
        "city": "The Woodlands",
        "state": "TX",
        "postalCode": "77382",
        "country": "United States",
        "phoneNumber": "510-441-9950"
      },
      workingHours: {
        "startTime": "08:00",
        "endTime": "17:00",
      }
    },
    {
      id: 2,
      airportCode: 'No Airport',
      address: {
        "streetAddress": "10 Halawai Dr",
        "city": "New York City",
        "state": "New York",
        "postalCode": "33348",
        "country": "United States",
        "phoneNumber": "508-334-5084"
      },
      workingHours: {
        "startTime": "09:00",
        "endTime": "18:00",
      }
    }
  ]

  private taxAndFees = [
    {
      name: 'GET',
      applied: '%',
      applied2: 'Per Reservation',
      amount: '4.17%'
    },
    {
      name: 'Airport Fee',
      applied: 'Flat',
      applied2: 'Per Reservation',
      amount: '$8.00'
    }
  ]

  constructor() { }

  getOrganizationData(): Observable<any> {
    return of(this.organizationData);
  }

  getServingLocations(): Observable<any[]> {
    return of(this.servingLocations);
  }

  getTaxAndFeesData() : Observable<any[]> {
    return of(this.taxAndFees);
  }

  getDataById(id: number): Observable<any> {
    return of(this.servingLocations.find((location: any) => location.id === id));
  }

  addLocation(location: any, isEditMode: boolean) {
    if (isEditMode) {
      const index = this.servingLocations.findIndex((classData: any) => classData.id === location.id);
      if (index !== -1) {
        this.servingLocations[index] = location;
        return of(this.servingLocations);
      } else {
        return throwError(() => new Error("Location not found"));
      }
    } else {
      location.id = this.servingLocations.length + 1;
      this.servingLocations.push(location);
      return of(this.servingLocations);
    }
  }

  deleteLocation(index: number) {
    this.servingLocations.splice(index, 1);
  }
}

