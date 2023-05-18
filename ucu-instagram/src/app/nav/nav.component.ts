import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
@Input() selected! : "discover" | "search"  | "upload" | "chat" | "profile" ;
}
