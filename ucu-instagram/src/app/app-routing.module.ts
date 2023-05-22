import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path: "upload", component: UploadComponent},
  {path: "discover", component: AppComponent}, 
  {path: "profile", component: ProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
