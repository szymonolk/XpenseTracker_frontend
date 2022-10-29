import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpenseModel} from "../models/ExpenseModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddNewService {
  constructor(private http: HttpClient ) { }

  createNewExpense(expenseModel: ExpenseModel): Observable<ExpenseModel> {
    return this.http.post<ExpenseModel>('http://localhost:8080/create', expenseModel);
  }

}
