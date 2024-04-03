import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DepartureArrivalComponent } from './departure-arrival/departure-arrival.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AirportBoardsModule { }
