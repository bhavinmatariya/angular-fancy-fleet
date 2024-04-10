import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization/organization.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';


const routes: Routes = [
  {
    path:'organization',
    component: OrganizationComponent
  },
  {
    path:'location-detail',
    component: LocationDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationLocationsRoutingModule { }
