import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewComponent} from "./add-new/add-new.component";

const routes: Routes = [
  {path: 'addnew', component: AddNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
