import { Component, OnInit } from '@angular/core';
import {ExpenseModel} from "../models/ExpenseModel";
import {Observable} from "rxjs";
import {AllExpensesService} from "./all-expenses.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-expenses-view',
  templateUrl: './all-expenses-view.component.html',
  styleUrls: ['./all-expenses-view.component.css']
})
export class AllExpensesViewComponent implements OnInit {
  constructor(private allExpenseService: AllExpensesService, private router: Router) { }

  expenseList: ExpenseModel[] = [];
  expenses: Observable<ExpenseModel[]>;

  ngOnInit(): void {
    this.getAllTask();
  }

  getAllTask(){
    return this.expenses = this.allExpenseService.getAllExpenses();
  }

  editTask(id: number){
    return this.router.navigateByUrl('/expense-details/' + id);
  }


}
