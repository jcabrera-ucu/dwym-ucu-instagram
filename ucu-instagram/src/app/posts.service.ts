import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  POST: Post[] = [
    {
      image: 'assets/post1.jpeg',
      user: {
        firstName: 'Juan',
        lastName: 'Cabrera',
        profilePicture: '',
        location: 'Uruguay',
        handle: '@juancho',
        tag: 'hotdog'
      }
    },

    {
      image: 'https://hips.hearstapps.com/hmg-prod/images/anne-hathaway-attends-the-2023-met-gala-celebrating-karl-news-photo-1682989632.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      user: {
        firstName: 'Anne',
        lastName: 'Hathaway',
        profilePicture: '',
        location: 'San Francisco, CA',
        handle: '@anne',
        tag: 'women'
      }
    },
    {
      image: 'https://images.hola.com/imagenes/moda/actualidad/20220524210350/anne-hathaway-zendaya-bvlgari-joyas/1-91-588/annehathawaycannes1-t.jpg',
      user: {
        firstName: 'Anne',
        lastName: 'Hathaway',
        profilePicture: '',
        location: 'San Francisco, CA',
        handle: '@anne',
        tag: 'women'
      }
    },
    {
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/anne-hathaway-seen-on-the-set-of-wecrashed-in-gramercy-news-photo-1636682563.jpg?crop=0.633xw:1.00xh;0.184xw,0&resize=1200:*',
      user: {
        firstName: 'Anne',
        lastName: 'Hathaway',
        profilePicture: '',
        location: 'San Francisco, CA',
        handle: '@anne',
        tag: 'women'
      }
    },
    {
      image: 'https://img.huffingtonpost.com/asset/62875e37230000866213c3c4.jpg?cache=ZCm1GLljxn&ops=scalefit_720_noupscale',
      user: {
        firstName: 'Anne',
        lastName: 'Hathaway',
        profilePicture: '',
        location: 'San Francisco, CA',
        handle: '@anne',
        tag: 'women'
      }
    }
  ]
  constructor() { }

  async getAllPosts(): Promise<Post[]> {
    return this.POST;
  }

  async getPostsByName(name: string): Promise<Post[]> {
    return this.POST.filter((post) => post.user.firstName === name);
  }

}


