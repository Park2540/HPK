import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor( private http: HttpClient ) { }
  //get virw userlis
  getuser(id: number){
    environment.apiUrl
    return this.http.get(`${environment.apiUrl}/api/user/view`)
  }
  //get virw system
  getsystem(id: number){
    environment.apiUrl
    return this.http.get(environment.apiUrl+'/api/system/view')
  }
  getproblem(id: number){
    environment.apiUrl
    return this.http.get(environment.apiUrl+'/api/problem/view')
  }
  getlevel(id: number){
    environment.apiUrl
    return this.http.get(environment.apiUrl+'/api/level/view')
  }

  getagency(id: number){
    environment.apiUrl
    return this.http.get(environment.apiUrl+'/api/agency/view')
  }
  getcontact(id: number){
    environment.apiUrl
    return this.http.get(environment.apiUrl+'/api/contact/view')
  }

  update() {
    return
  }
}
