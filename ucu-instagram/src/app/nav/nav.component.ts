import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';
import { SearchComponent } from '../search/search.component';
import { ChatService } from '../chat.service';
import { ChatOverlayComponent } from '../chat-overlay/chat-overlay.component';

type NavTabs =
  | "discover"
  | "search"
  | "upload"
  | "chat"
  | "profile";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  selected: NavTabs = "discover";

  // showChat = false;

  constructor(private router: Router, private dialog: MatDialog, private chatService: ChatService) {
    // this.chatService.displayChat.subscribe((value: boolean) => {
    //   this.showChat = value;
    // });
  }

  navigate(newView: NavTabs) {
    this.dialog.closeAll();
    this.selected = newView;
    if (newView === "discover" || newView === "search" || newView === "profile") {
      this.router.navigate([newView]);
    }
  }

  upload() {
    const previousSelected = this.selected;
    this.selected = "upload";

    const ref = this.dialog.open(UploadComponent, {
      hasBackdrop: true,
      position: {
        right: '0px',
      },
    });

    ref.afterClosed().subscribe((_closedFromButton: boolean) => {
      this.selected = previousSelected;
    });
  }

  toggleChat() {
    // this.chatService.toggleChat();
    const previousSelected = this.selected;
    this.selected = "chat";

    const ref = this.dialog.open(ChatOverlayComponent, {
      hasBackdrop: true,
      // width: '500px',
      position: {
        right: '0px',
      },
    });

    ref.afterClosed().subscribe((_closedFromButton: boolean) => {
      this.selected = previousSelected;
    });
  }
}
