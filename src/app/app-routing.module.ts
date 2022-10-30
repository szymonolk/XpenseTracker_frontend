import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewComponent} from "./add-new/add-new.component";
import {MainViewComponent} from "./main-view/main-view.component";
import {AllExpensesViewComponent} from "./all-expenses-view/all-expenses-view.component";
import {ExpenseDetailsComponent} from "./expense-details/expense-details.component";


const routes: Routes = [
  {path: 'add-new', component: AddNewComponent},
  {path: '', component: MainViewComponent },
  {path: 'all-expenses', component:AllExpensesViewComponent},
  {path: 'expense-details/:id', component:ExpenseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
