import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  selected: "discover" | "search" | "upload" | "chat" | "profile" = "discover";

  constructor(private router: Router, private dialog: MatDialog) {
  }

  navigate(newView: "discover" | "search" | "upload" | "chat" | "profile") {
    this.dialog.closeAll();
    this.selected = newView;
    if (newView === "discover" || newView === "search" || newView === "profile") {
      this.router.navigate([newView]);
    }
  }

  upload() {
    const previousSelected = this.selected;
    this.selected = "upload";
    const ref = this.dialog.open(UploadComponent);
    ref.afterClosed().subscribe((closedFromButton: boolean) => {
      if (closedFromButton) {
        this.selected = previousSelected;
      }
    });
  }
}
