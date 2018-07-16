import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
id:any[]=[];

user=true;
owner=false;
admin=false; 

items:any[]=['jaakfd','fafdsfsd','fdfdsfdf','fsdfsdf'];
  constructor() { }
  ngOnInit() {
  }
  
}
