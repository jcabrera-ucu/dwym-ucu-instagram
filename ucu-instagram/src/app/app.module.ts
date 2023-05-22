import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { PostComponent } from './post/post.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UploadComponent } from './upload/upload.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostContainerComponent,
    PostComponent,
    UploadComponent,
    ProfilePageComponent,
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
