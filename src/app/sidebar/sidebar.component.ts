 import { Component, OnInit } from '@angular/core';
 declare const $:any;
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})


export class SidebarComponent implements OnInit {

Items:['DashBoard','Properties','Profile','Settings'];
  constructor() {
    
    }
 
  ngOnInit() {
   
}
}