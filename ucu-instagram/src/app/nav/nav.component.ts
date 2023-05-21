import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  uploadComponent: UploadComponent;

  constructor() {
    this.uploadComponent = new UploadComponent();
  }
   

@Input() selected! : "discover" | "search"  | "upload" | "chat" | "profile" ;
}
