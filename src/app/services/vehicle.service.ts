import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private editedDataSubject = new BehaviorSubject<any[]>([]);
  editedData$ = this.editedDataSubject.asObservable();

  constructor() { }

  updateEditedData(data: any): void {
    this.editedDataSubject.next(data);
  }
}
