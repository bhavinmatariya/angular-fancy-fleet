import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarVerticalComponent } from './navbar/navbar-vertical/navbar-vertical.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarVerticalComponent,
  ],
  imports: [CommonModule,RouterModule],
  exports: [
    NavbarVerticalComponent,
  ],
})
export class ComponentsModule {}
