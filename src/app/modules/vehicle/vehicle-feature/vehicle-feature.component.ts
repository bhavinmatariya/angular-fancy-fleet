import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ListingService } from '../../../services/listing.service';
import { ListingComponent } from '../../../components/listing/listing.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-feature',
  standalone: true,
  templateUrl: './vehicle-feature.component.html',
  styleUrl: './vehicle-feature.component.scss',
  imports: [ListingComponent, CommonModule,FormsModule,ReactiveFormsModule]
})
export class VehicleFeatureComponent implements OnInit {

  constructor(private readonly listingService: ListingService) {}

  @ViewChild('featureTemplate', { read: TemplateRef, static: true })
  featureTemplate!: TemplateRef<any>;

  vehicleFeaturesData: any = [];
  headers: {}[] = [];

  ngOnInit(): void {
    this.vehicleFeaturesData = [
      {
        rowId: 1,
        data: [
          { title: 'Features', field: 'feature', value: '5 Seats', type: 'template', templateRef: this.featureTemplate },

        ]
      },
      {
        rowId: 2,
        data: [
          { title: 'Name', field: 'name', value: '6 Seats', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 3,
        data: [
          { title: 'Name', field: 'name', value: '7 Seats', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 4,
        data: [
          { title: 'Name', field: 'name', value: '2 Luggage', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 5,
        data: [
          { title: 'Name', field: 'name', value: '3 Luggage', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 6,
        data: [
          { title: 'Name', field: 'name', value: '4 Luggage', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 7,
        data: [
          { title: 'Name', field: 'name', value: '5 Luggage', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 8,
        data: [
          { title: 'Name', field: 'name', value: 'Automatic', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 9,
        data: [
          { title: 'Name', field: 'name', value: 'Blutooth CarPlay', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 10,
        data: [
          { title: 'Name', field: 'name', value: 'AC', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 11,
        data: [
          { title: 'Name', field: 'name', value: 'Mild Hybrid', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 12,
        data: [
          { title: 'Name', field: 'name', value: 'Plugin Hybrid', type: 'template', templateRef: this.featureTemplate },
        ]
      },
      {
        rowId: 13,
        data: [
          { title: 'Name', field: 'name', value: 'EV', type: 'template', templateRef: this.featureTemplate },
        ]
      }
    ];
    this.headers = [{ "header": 'Features', "type": 'template' }];
    this.listingService.updateTableData(this.vehicleFeaturesData);

    this.listingService.deleteInitiated.subscribe(payload => {
      const componentName = payload.componentName;
      const index = payload.index;

      if (componentName === 'vehicle-types') {
        this.vehicleFeaturesData.splice(index, 1);
        this.listingService.updateTableData(this.vehicleFeaturesData);
      }


    });
  }

  onChange(value: any, index: any) {
    this.vehicleFeaturesData[index].value = value;
  }

  addRow() {
    this.vehicleFeaturesData.push(
    {
      rowId: this.vehicleFeaturesData.length + 1,
      data: [
        { title: 'Features', field: 'feature', value: '', type: 'template', templateRef: this.featureTemplate },

      ]
    })
    this.listingService.updateTableData(this.vehicleFeaturesData);
  }
}
