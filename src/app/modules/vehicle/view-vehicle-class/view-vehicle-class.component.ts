import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';
import { AddVehicleClassComponent } from '../add-vehicle-class/add-vehicle-class.component';

@Component({
  selector: 'app-view-vehicle-class',
  standalone: true,
  templateUrl: './view-vehicle-class.component.html',
  styleUrl: './view-vehicle-class.component.scss',
  imports: [AddVehicleClassComponent]
})
export class ViewVehicleClassComponent implements OnInit{

  constructor(public dialogService: DialogService) {}

  @Input() selectedRowData: any;

  ngOnInit(): void {
  }

}
