
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class AuthenticationService {
    readonly root_url="http://localhost:57055";
    constructor(private http: HttpClient,
        private userService: UserService) { }

    login(uname: string, confword: string) {
        const headers = new HttpHeaders().set('content-type', 'application/json'); 
        return this.http.post<any>(this.root_url+'/api/Owner', { uname:uname,confword:confword},{headers})
          ;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}