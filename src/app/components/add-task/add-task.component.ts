import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks.model';
import { TaskService } from 'src/app/sevices/task.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  // createTaskForm =new FormGroup({
  //   title : new FormControl('', Validators.required),
  //   description : new FormControl('', Validators.required),
  //   published : new FormControl('false', Validators.required)
  // });

  createTaskForm!: FormGroup;

  submitted = false;

  constructor(
    private fb:FormBuilder,
    private service : TaskService) {}

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      published: ['false', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.createTaskForm.value);
    this.service.createTask(this.createTaskForm.value).subscribe((res)=>{
      this.submitted = true;
    });
    this.createTaskForm.reset();
  }

  reset() {
    this.createTaskForm.reset();
  }

  addNewTask() {
    this.submitted = false;
  }

  updateTask(id:string) {
    this.service.update(id, this.createTaskForm );
  }
}
