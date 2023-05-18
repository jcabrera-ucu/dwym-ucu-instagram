import { Component } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent {

  posts: Post[] = [];

  constructor(private postsService: PostsService) {
    postsService.getAllPosts().then(posts => {
      this.posts = posts;
      console.log(this.posts);
    })
  }
}
