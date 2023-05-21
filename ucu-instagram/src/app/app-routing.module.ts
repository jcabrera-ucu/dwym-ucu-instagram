import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path: "upload", component: UploadComponent},{path: "discover", component: AppComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // <-- Habilitar el modo de hash
  exports: [RouterModule]
})
export class AppRoutingModule { }
