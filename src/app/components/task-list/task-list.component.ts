import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/sevices/task.service';
import { Tasks } from 'src/app/models/tasks.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks?: Tasks[];
  constructor(private service : TaskService) { }

  ngOnInit(): void {
    this.retrieveTasks();
  }

  refreshList(){
    this.retrieveTasks();
  }

  retrieveTasks(){
    this.service.getAllTasks().subscribe((result:any)=>{
      console.log({result});
      this.tasks = result;
    });
  }

  removeAllTasks() {  
      this.service.deleteAll();
  }
}
