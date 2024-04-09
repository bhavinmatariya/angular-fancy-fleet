import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { VehicleFeatureComponent } from './vehicle-feature/vehicle-feature.component';
import { VehicleRoutingModule } from './vehicle-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    VehicleTypesComponent,
    VehicleFeatureComponent,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
