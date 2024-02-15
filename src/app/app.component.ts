import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fancy-fleet-new';
  isSidebarOpen: boolean = false;
  collapseSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
