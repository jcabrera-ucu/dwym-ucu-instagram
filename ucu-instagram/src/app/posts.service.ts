import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  async getAllPosts(): Promise<Post[]> {
    return [
      {
        image: 'assets/post1.jpeg',
        user: {
          firstName: 'Juan',
          lastName: 'Cabrera',
          profilePicture: '',
          handle: '@juancho',
        }
      },
      {
        image: 'assets/post1.jpeg',
        user: {
          firstName: 'Juan',
          lastName: 'Cabrera',
          profilePicture: '',
          handle: '@juancho',
        }
      },
    ];
  }
}
