import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleClassComponent } from './vehicle-class/vehicle-class.component';
import { VehicleFeatureComponent } from './vehicle-feature/vehicle-feature.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';

const routes: Routes = [
  {
    path:'vehicle-class',
    component: VehicleClassComponent
  },
  {
    path:'vehicle-features',
    component: VehicleFeatureComponent
  },
  {
    path:'vehicle-types',
    component: VehicleTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
