import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private _http: HttpClient ) {
    this.getAllTask();
    this.showTask();
  }

  getAllTask() {
    let observable = this._http.get( 'http://localhost:8080/api' );
    observable
    .subscribe(data=> console.log("Now you can see our Tasks API", data));    
  }

  showTask() {
    let observable = this._http.get( 'http://localhost:8080/api/study2' );
    observable
    .subscribe(data=> console.log("Now you can see our Study Task API", data));    
  }
}
