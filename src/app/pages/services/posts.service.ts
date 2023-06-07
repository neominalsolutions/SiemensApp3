import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // DI mekanizması kullanıyor.
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number) {
    return this.http.get<Posts>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
}
