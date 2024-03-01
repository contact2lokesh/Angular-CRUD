import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/sevices/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'] 
})
export class TaskDetailsComponent implements OnInit {
  editForm!: FormGroup;
  constructor(
    private service : TaskService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }


  updatePublished() {

  }

  updateTask() {
    
  }

  deleteTutorial() {}

}
