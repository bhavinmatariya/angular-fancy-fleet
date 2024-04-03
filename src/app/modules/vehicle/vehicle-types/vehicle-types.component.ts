import { Component, ViewChild, TemplateRef, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ListingComponent } from '../../../components/listing/listing.component';
import { ListingService } from '../../../services/listing.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-types',
  standalone: true,
  templateUrl: './vehicle-types.component.html',
  styleUrl: './vehicle-types.component.scss',
  imports: [ListingComponent, CommonModule,FormsModule,ReactiveFormsModule]
})
export class VehicleTypesComponent implements OnInit {

  constructor(private readonly changeDetectorRef: ChangeDetectorRef, private listingService: ListingService) {}

  @ViewChild('nameTemplate', { read: TemplateRef, static: true })
  nameTemplate!: TemplateRef<any>;
  vehicleTypesData: any = [];
  headers: {}[] = [];

  ngOnInit(): void {
    this.vehicleTypesData = [
      {
        title: 'Name',
        field: 'name',
        value: 'Car',
        type: 'template',
        templateRef: this.nameTemplate,
      },
      {
        title: 'Name',
        field: 'name',
        value: 'Motorcycle',
        type: 'template',
        templateRef: this.nameTemplate,
      },
      {
        title: 'Name',
        field: 'name',
        value: 'Limo',
        type: 'template',
        templateRef: this.nameTemplate,
      },
      ]

    this.headers = [{"header": 'Name', "type": 'template'}];
    this.listingService.updateTableData(this.vehicleTypesData);

    this.listingService.deleteInitiated.subscribe(payload => {
      debugger;
      const componentName = payload.componentName;
      const index = payload.index;

      if (componentName === 'vehicle-types') {
        this.vehicleTypesData.splice(index, 1);
        this.listingService.updateTableData(this.vehicleTypesData);
      }


    });
  }

  addRow() {
    this.vehicleTypesData.push({
      title: 'Name',
      field: 'name',
      value: '',
      type: 'template',
      templateRef: this.nameTemplate,
    },)
    this.listingService.updateTableData(this.vehicleTypesData);
  }

  onChange(value: any, index: any) {
    this.vehicleTypesData[index].value = value;
  }
}
