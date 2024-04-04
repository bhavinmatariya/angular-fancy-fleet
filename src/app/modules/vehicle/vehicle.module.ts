import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { VehicleFeatureComponent } from './vehicle-feature/vehicle-feature.component';



@NgModule({
  declarations: [
    VehicleTypesComponent,
    VehicleFeatureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehicleModule { }
