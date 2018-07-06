import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {AuthenticationService } from '../services/index';
export class log{
    uname:string;
    confword:string;
}
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']

})

export class LoginComponent implements OnInit {
    model:log=new log();
    
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
       ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
       
        this.authenticationService.login(this.model.uname, this.model.confword)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                  console.log("loginfailed");
                });
    }
}
