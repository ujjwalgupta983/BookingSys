import { User } from './../_models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService
     //   private alertService: AlertService
      ) { }

        
     register() {
        this.loading = true;
        this.userService.create(this.model).subscribe(
            data => {
                //this.alertService.success('Registration successful', true);
                this.router.navigate(['login']);
            },
            error => {
               // this.alertService.error(error);
                this.loading = false;
            });
        /* this.userService.getAll<User[]>(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }); */
    } 
}
