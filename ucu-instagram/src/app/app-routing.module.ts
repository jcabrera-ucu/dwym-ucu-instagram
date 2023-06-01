import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: "upload", component: UploadComponent },
  { path: "discover", component: PostContainerComponent },
  { path: "profile", component: ProfilePageComponent },
  { path: "search", component: SearchComponent},
  { path: "**", redirectTo: "discover" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
