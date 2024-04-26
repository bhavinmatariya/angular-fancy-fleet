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
      feature: '5 Seats'
      },
      {
        feature: '6 Seats'
      },
      {
        feature: '7 Seats'
      },
      {
        feature: '2 Luggage'
      },
      {
        feature: '3 Luggage'
      },
      {
        feature: '4 Luggage'
      },
      {
        feature: '5 Luggage'
      },
      {
        feature: 'Automatic'
      },
      {
        feature: 'Blutooth CarPlay'
      },
      {
        feature: 'AC'
      },
      {
        feature: 'Mild Hybrid'
      },
      {
        feature: 'Plugin Hybrid'
      },
      {
        feature: 'EV'
      }
    ];
    this.headers = [{ header: 'Features', field: 'feature', type: 'template', templateRef: this.featureTemplate }];
    this.listingService.updateTableData(this.vehicleFeaturesData);

    this.listingService.deleteInitiated.subscribe(payload => {
      const componentName = payload.componentName;
      const index = payload.index;

      // if (componentName === 'vehicle-types') {
        this.vehicleFeaturesData.splice(index, 1);
        this.listingService.updateTableData(this.vehicleFeaturesData);
      // }


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
