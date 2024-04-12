import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehicleClassData = [
    {
      id: 1,
      class: "Full Size SUV",
      vehicleType: "Car",
      passenger: 7,
      features: ["5 Seates", "AC"],
      noOfVehicles: 10,
      active: "Yes",
    },
    {
      id: 2,
      class: "Standard SUV",
      vehicleType: "Car",
      passenger: 5,
      features: ["5 Seates", "Bluetooth CarPlay", "AC"],
      noOfVehicles: 15,
      active: "Yes",
    },
    {
      id: 3,
      class: "Midsize Open Air SUV",
      vehicleType: "Car",
      passenger: 4,
      features: ["4 Seates", "Automatic", "Bluetooth CarPlay", "AC"],
      noOfVehicles: 5,
      active: "Yes",
    },
    {
      id: 4,
      class: "Full size Open Air SUV",
      vehicleType: "Car",
      passenger: 6,
      features: ["5 Seates", "2 Luggage", "AC"],
      noOfVehicles: 10,
      active: "Yes",
    },
    {
      id: 5,
      class: "Full Size Car",
      vehicleType: "Car",
      passenger: 5,
      features: ["5 Seates", "AC"],
      noOfVehicles: 10,
      active: "Yes",
    },
    {
      id: 6,
      class: "Economy car",
      vehicleType: "Car",
      passenger: 4,
      features: ["4 Seates", "AC"],
      noOfVehicles: 15,
      active: "Yes",
    }
  ];

  private editedDataSubject = new BehaviorSubject<any[]>([]);
  editedData$ = this.editedDataSubject.asObservable();

  constructor() { }

  getVehicleClass(): Observable<any[]> {
    return of(this.vehicleClassData);
  }

  addVehicleClass(vehicleClass: any) {
    this.vehicleClassData.push(vehicleClass);
    return of(vehicleClass);
  }

  getVehicleClassById(id: number): Observable<any> {
   return of(this.vehicleClassData.find((classData: any) => classData.id === id));
  }

  updateVehicleClass(updatedClass: any): Observable<any> {
    const index = this.vehicleClassData.findIndex((classData: any) => classData.id === updatedClass.id);
    if (index !== -1) {
      this.vehicleClassData[index] = { ...this.vehicleClassData[index], ...updatedClass };
      return of(this.vehicleClassData[index]);
    } else {
      return throwError("Vehicle class not found");
    }
  }

}
