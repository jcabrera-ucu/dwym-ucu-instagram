import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [{path: "upload", component: UploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // <-- Habilitar el modo de hash
  exports: [RouterModule]
})
export class AppRoutingModule { }
