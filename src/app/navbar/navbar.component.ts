import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
j:any=[{class:"active",name:'<button>clickMe</button>'},{class:"Dash",name:"Dashboard"},{class:'set',name:"settings"}];
ownerID:string="OWN45679@1312";
  constructor() { }

  ngOnInit() {
  }

}
