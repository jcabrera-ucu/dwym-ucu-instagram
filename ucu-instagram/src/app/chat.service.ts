import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  displayChat: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleChat() {
    this.displayChat.next(!this.displayChat.value);
  }


}
