import { Component, OnInit } from '@angular/core';
import { User } from './../_models/user';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  model:User=new User();
  Gender: string[] = [' Male ',' Female '];
  register()
  { console.log("hello");
  console.log(this.model);
    this.userService.create(this.model).subscribe(
      data => {
          this.router.navigate(['login']);
      },
      error => {
         console.log("fuckOff");
      });
 

  }
  constructor(private userService: UserService,private router: Router) { }
  
  ngOnInit() {
  }

}
