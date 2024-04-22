import { Component } from '@angular/core';
import { DialogService } from './services/dialog.service';

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

  constructor(public dialogService: DialogService){}
}
