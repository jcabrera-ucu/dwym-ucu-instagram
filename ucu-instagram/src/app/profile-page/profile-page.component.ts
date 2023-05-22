import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  user!: User;
  posts: Post[] = [];

  constructor(private userService: UserService, private postsService: PostsService) {
    this.userService.getUser().then(user => {
      this.user = user;
    }).then(() => {
      this.postsService.getPostsByName(this.user.firstName).then((posts) => {
        this.posts = posts;
      })
    });


  }
}
