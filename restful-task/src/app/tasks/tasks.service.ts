import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private _http: HttpClient ) {
    this.getAllTask();
  }

  getAllTask() {
    let observable = this._http.get( 'http://localhost:8080/api' );
    observable
    .subscribe(data=> console.log("Now you can see our Tasks API", data));    
  }
}
