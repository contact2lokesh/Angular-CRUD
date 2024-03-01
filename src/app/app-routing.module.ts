import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : '', component: RegisterComponent
  },
  {
    path: 'task',
    component: TaskListComponent,
  },
  {
    path: 'task/:id',
    component: TaskDetailsComponent,
  },
  {
    path: 'add',
    component: AddTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
