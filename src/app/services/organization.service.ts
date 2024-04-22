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
    lat: 30.209685010721643,
    lng: -95.5494148238209,
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
      },
      lat: 30.2096804,
      lng: -95.5494148
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
      },
      lat: 20.9422499,
      lng: -156.6890149
    }
  ]

  private taxAndFees: any = [
    {
      id: 1,
      entity: 'Airport Taxes',
      streetAddress: "30 Clingstone PL",
      city: "The Woodlands",
      state: "TX",
      postalCode: "77382",
      country: "United States",
      phoneNumber: "510-441-9950",
      taxAndFees: [
        {
          name: 'GET',
          applied: '%',
          applied2: 'Per Reservation',
          amount: '4.17%'
        },
        {
          name: 'Airport Fee',
          applied: 'Flat',
          applied2: 'Per Invoice',
          amount: '$8.00'
        }
      ]
    },
    {
      id: 2,
      entity: 'Government Taxes',
      streetAddress: "30 Clingstone PL",
      city: "The Woodlands",
      state: "TX",
      postalCode: "77382",
      country: "United States",
      phoneNumber: "510-441-9950",
      taxAndFees: [
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

  addEntity(entity: any, isEditMode: boolean) {
    if (isEditMode) {
      const index = this.taxAndFees.findIndex((e: any) => e.id === entity.id);
      if (index !== -1) {
        this.taxAndFees[index] = entity;
        return of(this.taxAndFees);
      } else {
        return throwError(() => new Error("entity not found"));
      }
    } else {
      entity.id = this.taxAndFees.length + 1;
      this.taxAndFees.push(entity);
      return of(this.taxAndFees);
    }
  }
}

