import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-view-vehicle-class',
  standalone: true,
  templateUrl: './view-vehicle-class.component.html',
  styleUrl: './view-vehicle-class.component.scss'
})
export class ViewVehicleClassComponent implements OnInit{

  constructor(public dialogService: DialogService) {}

  @Input() selectedRowData: any;

  ngOnInit(): void {
  }

}
