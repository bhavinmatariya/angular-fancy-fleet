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

  @ViewChild('activeTemplate', { read: TemplateRef, static: true })
  activeTemplate!: TemplateRef<any>;

  vehicleTypesData: any = [];
  headers: {}[] = [];
  selectedRowData: any = null;

  ngOnInit(): void {
    this.vehicleTypesData = [
      {
        name: 'Car',
        noOfVehicles: 10,
        active: "Yes",
      },
      {
        name: 'Motorcycle',
        noOfVehicles: 5,
        active: "Yes",
      },
      {
        name: 'Limo',
        noOfVehicles: 3,
        active: "Yes",
      }
    ];

    this.headers = [{ header: 'Name', field: 'name', type: 'template', templateRef: this.nameTemplate, width: '40%' }, { header: '# of vehicles', field: 'noOfVehicles', type: 'label' }, { header: 'Active', field: 'active', type: 'template', templateRef: this.activeTemplate, width: '40%' }];
    this.listingService.updateTableData(this.vehicleTypesData);
    this.changeDetectorRef.detectChanges();

    this.listingService.deleteInitiated.subscribe(payload => {
      const componentName = payload.componentName;
      const index = payload.index;

      // if (componentName === 'vehicle-types') {
        this.vehicleTypesData.splice(index, 1);
        this.listingService.updateTableData(this.vehicleTypesData);
        this.changeDetectorRef.detectChanges();
      // }


    });
  }

  addRow() {
    this.vehicleTypesData.push(
    {
      rowId: this.vehicleTypesData.length + 1,
      data: [
        { title: 'Name', field: 'name', value: '', type: 'template', templateRef: this.nameTemplate },
        { title: '# of vehicles', field: '# of vehicles', value: 0, type: 'label' },
        { title: 'Active', field: 'active', value: '', type: 'template', templateRef: this.activeTemplate }
      ]
    })
    this.listingService.updateTableData(this.vehicleTypesData);
  }

  onChange(value: any, index: any) {
    this.vehicleTypesData[index].value = value;
  }
}
