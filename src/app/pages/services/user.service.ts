import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
