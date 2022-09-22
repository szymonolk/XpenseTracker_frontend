import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewComponent} from "./add-new/add-new.component";
import {MainViewComponent} from "./main-view/main-view.component";
import {AllExpensesViewComponent} from "./all-expenses-view/all-expenses-view.component";

const routes: Routes = [
  {path: 'addnew', component: AddNewComponent},
  {path: '', component: MainViewComponent },
  {path: 'allexpenses', component:AllExpensesViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
