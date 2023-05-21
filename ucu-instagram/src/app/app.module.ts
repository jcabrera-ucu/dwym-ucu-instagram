import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostComponent } from './post/post.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostContainerComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatIconModule,
   MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
