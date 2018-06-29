import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
    readonly root_url="http://localhost:57055"
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.root_url+'/api/Owner');
       
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        console.log(user);
        const headers = new HttpHeaders().set('content-type', 'application/json');  
        let body = JSON.stringify(user);
        console.log(body);            
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
console.log(headers);
        return this.http.post(this.root_url+"/api/Owner/", body,{headers});
    
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}