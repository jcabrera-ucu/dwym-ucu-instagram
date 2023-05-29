import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';
import { SearchComponent } from '../search/search.component';
import { ChatService } from '../chat.service';

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

  showChat = false;

  constructor(private router: Router, private dialog: MatDialog, private chatService: ChatService) {
    this.chatService.displayChat.subscribe((value: boolean) => {
      this.showChat = value;
    });
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
    const config: MatDialogConfig = {
      hasBackdrop: true,
      position: {
        right: '0px',
        // top: '5px',
      },
      // height: '100vh',
      // maxHeight: '100vh',
      // minHeight: '100vh'
    };
    const ref = this.dialog.open(UploadComponent, config);
    ref.afterClosed().subscribe((closedFromButton: boolean) => {
      if (closedFromButton) {
        this.selected = previousSelected;
      }
    });
  }

  toggleChat() {
    this.chatService.toggleChat();
  }
}
