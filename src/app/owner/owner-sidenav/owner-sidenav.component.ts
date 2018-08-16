import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  name: string;
  icon: string;
  class: string;
}


export const ROUTES: RouteInfo[] = [
     { path: './dashboard', name: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: './user-profile', name: 'User Profile',  icon:'person', class: '' },
    { path: './table-list', name: 'Table List',  icon:'content_paste', class: '' },
    { path: './typography', name: 'Typography',  icon:'library_books', class: '' },
    { path: './icons', name: 'Icons',  icon:'bubble_chart', class: '' },
    { path: './maps', name: 'Maps',  icon:'location_on', class: '' },
    { path: './notifications', name: 'Notifications',  icon:'notifications', class: '' },
];


@Component({
  selector: 'app-ownersidenav',
  templateUrl: './owner-sidenav.component.html',
  styleUrls: ['./owner-sidenav.component.scss']
})
export class OwnerSidenavComponent implements OnInit {
  menuItems: any[];
  shouldRun=true;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}




