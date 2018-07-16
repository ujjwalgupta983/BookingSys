import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownersidenav',
  templateUrl: './owner-sidenav.component.html',
  styleUrls: ['./owner-sidenav.component.scss']
})
export class OwnerSidenavComponent implements OnInit {
  j:any=[{class:"active",name:'Abhinav'},{class:"Dash",name:"Dashboard"},{class:'set',name:"settings"}];
shouldRun=true;
  constructor() { }

  ngOnInit() {
  }

}
