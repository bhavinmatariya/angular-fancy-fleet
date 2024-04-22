import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  showViewVehicleClassModal: boolean = false;
  showAddVehicleClassModal: boolean = false;
  showEditVehicleClassModal: boolean = false;
  showEditVehicleClassModalView: boolean = false;
  showConfirmDeleteDialog: boolean = false;

}
