
import { Observable } from 'rxjs';
import { Property } from './../_models/property';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
    
  readonly root_url="http://localhost:57055/api/Assests"
  constructor(private http: HttpClient) { }
  
  getComments() : Observable<Property[]> {

    // ...using get request
return this.http.get<Property[]>(this.root_url);
                   // ...and calling .json() on the response to return dat
                    //...errors if any
                  
}
  getAll() {
      
    let a= this.http.get<Property[]>(this.root_url+'/api/Assests');
   return a;
   
  }

  getById(id: number) {
      return this.http.get('/api/users/' + id);
  }

  create(user: Property) {
      
      console.log(user);
      const headers = new HttpHeaders().set('content-type', 'application/json');  
      let body = JSON.stringify(user);
      console.log(body);            
      //let headers = new Headers({ 'Content-Type': 'application/json' });
      //let options = new RequestOptions({ headers: headers });
console.log(headers);
      return this.http.post(this.root_url+"/api/Assests/", body,{headers});
  
  }

  update(user: Property) {
      return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
      return this.http.delete('/api/users/' + id);
  }
}
