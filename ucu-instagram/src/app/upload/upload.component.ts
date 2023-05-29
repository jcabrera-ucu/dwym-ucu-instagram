import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @ViewChild("fileInput") fileInput !: ElementRef;

  selectFile() {
    this.fileInput.nativeElement.click();
  }
}
