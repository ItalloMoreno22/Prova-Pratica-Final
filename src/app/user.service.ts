import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl= 'https://jsonplaceholder.typicode.com/todos'


  GetUser(): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.userUrl)

}

}
