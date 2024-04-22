import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private tableDataSubject = new BehaviorSubject<any[]>([]);
  tableData$ = this.tableDataSubject.asObservable();
  currentDeleteData: any = {};

  deleteInitiated = new EventEmitter<{ componentName: string, index: number }>();

  constructor() { }

  updateTableData(data: any): void {
    this.tableDataSubject.next(data);
  }

  setDeleteInitiated(componentName: string, index: number): void {
    this.deleteInitiated.emit({ componentName, index });
  }
}
