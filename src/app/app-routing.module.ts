import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './components/common/coming-soon/coming-soon.component';
import { CustomerRoutingModule } from './modules/customer/customer-routing.module';
import { AirportBoardsComponent } from './modules/airport-boards/airport-boards/airport-boards.component';
import { VehicleTypesComponent } from './modules/vehicle/vehicle-types/vehicle-types.component';
import { VehicleFeatureComponent } from './modules/vehicle/vehicle-feature/vehicle-feature.component';
import { VehicleClassComponent } from './modules/vehicle/vehicle-class/vehicle-class.component';

const routes: Routes = [
  {
    path:'',
    component: ComingSoonComponent
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'airport-boards',
    component: AirportBoardsComponent
  },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./modules/vehicle/vehicle.module').then((m) => m.VehicleModule),
  },
  {
    path: 'organization',
    loadChildren: () =>
      import('./modules/organization-locations/organization-locations.module').then((m) => m.OrganizationLocationsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CustomerRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
