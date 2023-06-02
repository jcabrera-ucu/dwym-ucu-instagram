import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  
  selector: 'app-chat-overlay',
  templateUrl: './chat-overlay.component.html',
  styleUrls: ['./chat-overlay.component.css']
})
export class ChatOverlayComponent {
  
  constructor(public chatService: ChatService) { }

  chats = [
    {
      id: 1,
      lastMessage: "Never",
      username: "John Doe",
      profilePicture: "https://picsum.photos/200"
    },
    {
      id: 2,
      lastMessage: "Gonna",
      username: "Jane Doe",
      profilePicture: "https://picsum.photos/201"
    },
    {
      id: 3,
      lastMessage: "Give",
      username: "John Smith",
      profilePicture: "https://picsum.photos/202"
    },
    {
      id: 4,
      lastMessage: "You",
      username: "Jane Smith",
      profilePicture: "https://picsum.photos/203"
    },
    {
      id: 5,
      lastMessage: "Up",
      username: "John Clark",
      profilePicture: "https://picsum.photos/204"
    }
  ];
  

}
