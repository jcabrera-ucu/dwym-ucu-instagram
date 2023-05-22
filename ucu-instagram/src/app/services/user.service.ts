import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER: User = {
    profilePicture: "https://laopinion.com/wp-content/uploads/sites/3/2022/12/GettyImages-1401413306.jpg?quality=80&strip=all&w=1200",
    firstName: 'Anne',
    lastName: 'Hathaway',
    location: 'San Francisco, CA',
    handle: '@anne'
  }

  constructor() { }

  async getUser(): Promise<User>{
    return this.USER;
  }
}
