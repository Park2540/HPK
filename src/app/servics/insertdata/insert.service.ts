import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiInsertService {

  constructor( private http: HttpClient ) { }
  //get virw problem


  getcr():Observable<any> {
    return this.http.get('/api/problemrecord')
  }

  createNewInsertproblem(form:any,file:File):Observable<any>{
    var data = new FormData();
    data.append('agency',form.agency);
    data.append('contact',form.contact);
    data.append('informer',form.informer);
    data.append('informer_message',form.informer_message);
    data.append('system',form.system);
    data.append('problem_type',form.problem_type);
    data.append('level',form.level);
    data.append('problem',form.problem);
    data.append('file',file);
    return this.http.post(environment.apiUrl+'/api/problemrecord',data)
  }
  update() {
    return
  }
}
