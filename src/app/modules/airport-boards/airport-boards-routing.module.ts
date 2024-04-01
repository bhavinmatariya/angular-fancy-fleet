import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportBoardsComponent } from './airport-boards/airport-boards.component';

const routes: Routes = [
  {
    path:'test',
    component: AirportBoardsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportBoardsRoutingModule { }
