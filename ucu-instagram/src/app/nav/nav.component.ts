import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() selected!: "discover" | "search" | "upload" | "chat" | "profile";

  constructor(private router: Router, private dialog: MatDialog) {

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
}
