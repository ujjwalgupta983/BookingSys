import { Component, OnInit } from '@angular/core';
import { RouterModule,Router} from '@angular/router';
@Component({
  selector: 'app-prop-search',
  templateUrl: './prop-search.component.html',
  styleUrls: ['./prop-search.component.scss']
})
export class PropSearchComponent implements OnInit {
 login()
 {
   this.router.navigate(['owner-layout']);
 }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
