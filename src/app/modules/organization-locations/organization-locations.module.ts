import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization/organization.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { OrganizationLocationsRoutingModule } from './organization-locations-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganizationLocationsRoutingModule
  ]
})
export class OrganizationLocationsModule { }
