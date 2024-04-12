import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleClassComponent } from './vehicle-class/vehicle-class.component';
import { VehicleFeatureComponent } from './vehicle-feature/vehicle-feature.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { AddVehicleClassComponent } from './add-vehicle-class/add-vehicle-class.component';
import { ViewVehicleClassComponent } from './view-vehicle-class/view-vehicle-class.component';

const routes: Routes = [
  {
    path:'vehicle-class',
    component: VehicleClassComponent
  },
  {
    path:'add-vehicle-class',
    component: AddVehicleClassComponent
  },
  {
    path:'edit-vehicle-class/:id',
    component: AddVehicleClassComponent
  },
  {
    path:'view-vehicle-class/:id',
    component: ViewVehicleClassComponent
  },
  {
    path:'vehicle-features',
    component: VehicleFeatureComponent
  },
  {
    path:'vehicle-types',
    component: VehicleTypesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
