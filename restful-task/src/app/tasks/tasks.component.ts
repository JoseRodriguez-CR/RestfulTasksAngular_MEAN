import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: any[] = [];
  constructor( private _taskService: TasksService ) { }

  ngOnInit(): void {
    /* let observable = this._taskService.getAllTask();

    observable
    .subscribe( (data: any) => {
      console.log( "Tasks Component", data.message);
      
      let tasks: any[] = data.message;
      this.taskList = data.message;
      console.log( this.taskList);
    })*/
  }

}
