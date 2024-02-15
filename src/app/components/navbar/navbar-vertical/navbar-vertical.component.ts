import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-navbar-vertical]',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss'],
})
export class NavbarVerticalComponent implements OnInit {
  @Input() isSidebarOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {
    // var navbarStyle = localStorage.getItem('navbarStyle');
    // if (navbarStyle && navbarStyle !== 'transparent') {
    //   document
    //     .querySelector('.navbar-vertical')
    //     ?.classList.add(`navbar-${navbarStyle}`);
    // }
  }
}
