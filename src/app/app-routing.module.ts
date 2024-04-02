import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './components/common/coming-soon/coming-soon.component';
import { CustomerRoutingModule } from './modules/customer/customer-routing.module';
import { AirportBoardsComponent } from './modules/airport-boards/airport-boards/airport-boards.component';
import { VehicleTypesComponent } from './modules/vehicle/vehicle-types/vehicle-types.component';

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
    path: 'vehicle-types',
    component: VehicleTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CustomerRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
