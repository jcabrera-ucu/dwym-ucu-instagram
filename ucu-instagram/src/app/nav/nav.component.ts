import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() selected!: "discover" | "search" | "upload" | "chat" | "profile";

  showChat = false;

  constructor(private router: Router, private dialog: MatDialog, private chatService: ChatService) {
    this.chatService.displayChat.subscribe((value:boolean) => {
      this.showChat = value;
      console.log("showChat: " + this.showChat);
    });
  }

  navigate(newView: "discover" | "search" | "upload" | "chat" | "profile") {
    this.dialog.closeAll();
    setTimeout(() => {
      this.selected = newView;
      this.router.navigate([newView]);
    }, 80
    );

  }

  upload() {
    const previousSelected = this.selected;
    this.selected = "upload";
    const ref = this.dialog.open(UploadComponent);
    ref.afterClosed().subscribe(() => {
      this.selected = previousSelected;
    });
  }

  toggleChat() {
    this.chatService.toggleChat();
  }
}
