import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
 providedIn: 'root',
})

export class PostService {
 
  constructor(private client: HttpClient) { }
 
  getProfile() {
    return this
    .client
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
 }
}