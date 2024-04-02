import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ListingComponent } from '../../../components/listing/listing.component';

@Component({
  selector: 'app-vehicle-types',
  standalone: true,
  templateUrl: './vehicle-types.component.html',
  styleUrl: './vehicle-types.component.scss',
  imports: [ListingComponent]
})
export class VehicleTypesComponent implements OnInit {

  @ViewChild('nameTemplate', { read: TemplateRef, static: true })
  nameTemplate!: TemplateRef<any>;
  vehicleTypesData: {}[] = [];
  headers: {}[] = [];
  ngOnInit(): void {
    this.vehicleTypesData = [
      //   {
      //   "id": 1,
      //   "Name": {
      //     "key": 'Name',
      //     "value": "Car",
      //     "type": "template"
      //   }
      // },
      {
        title: 'Name',
        field: 'name',
        value: 'Car',
        type: 'template',
        templateRef: this.nameTemplate,
      },
      ]

      this.headers = [{"header": 'ID', "type": 'label'}, {"header": 'Name', "type": 'template'}];
  }

}
