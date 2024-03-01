import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../models/tasks.model';

const baseUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http : HttpClient) { }

  createTask(data:Tasks): Observable<any> {
    console.log({data});
    return this.http.post('http://localhost:3000/task', data)
   
  }

  getAllTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>('http://localhost:3000/task');
  };

  deleteAll(): Observable<any> {
      return this.http.delete<any>(`http://localhost:3000/task`);
  }

  update(id:string, data:object){
     this.http.put<string>(`http://localhost:3000/task/${id}`, data);
  }
}
