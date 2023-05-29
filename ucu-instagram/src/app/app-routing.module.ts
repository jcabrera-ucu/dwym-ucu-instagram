import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { AppComponent } from './app.component';
import { PostContainerComponent } from './post-container/post-container.component';

const routes: Routes = [
  {path: "upload", component: UploadComponent},
  {path: "discover", component: PostContainerComponent},
  {path: "**", redirectTo: "discover"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
