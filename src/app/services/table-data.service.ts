
import { Property } from './../_models/property';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class TabledataService {
    public ELEMENT: Property[] =
  []
 ;
data:any[]=this.ELEMENT;

  readonly root_url="http://localhost:57055/api/Assests"
  constructor(private http: HttpClient) {

     /*  this.http.get('http://localhost:57055/api/Assests')
          .subscribe(response=>{ 
              return response as Property[];
          let prop=response;
          console.log(prop[0].propId);
          this.data[0]=prop[0];
          console.log(this.data[0]); 
         });
        
   */
  this.http.get('http://localhost:57055/api/Assests').subscribe(response=>
       {TabledataService.setSubscribeData(response); }
   );
          console.log(this.data[0]);
          this.data[0]={"propid":1,"propName":"Shailza","addsprimary":"Sector 71","addssecondary":null,"type":"PG","oId":1,"city":"Noida","state":"UP","pincode":201301,"room":[]}
          console.log(this.data[0]);
          
        
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
      return this.http.put('/api/users/' + user.propid, user);
  }

  delete(id: number) {
      return this.http.delete('/api/users/' + id);
  }
  static subscribeData;
static setSubscribeData(data):any[]{
   TabledataService.subscribeData=data;
    return data;
}
}

 