import { Component } from '@angular/core';
import { TasksService } from './tasks/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restful-task';

  constructor( private _taskService: TasksService ){

  }
}
