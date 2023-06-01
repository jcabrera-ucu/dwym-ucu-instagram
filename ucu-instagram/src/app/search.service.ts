import { Injectable } from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  posts: Array<Post> = [];
  postsWithTag : Array<Post> = [];


  constructor( private post: PostsService) {
    post.getAllPosts().then(posts =>{this.posts = posts})

  }

  async getPostsByTag(tag: string): Promise<Post[]> {
    return this.posts.filter((post) => post.user.tag === tag);
  }
}
