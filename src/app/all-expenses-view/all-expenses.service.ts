import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExpenseModel} from "../models/ExpenseModel";

@Injectable({
  providedIn: 'root'
})
export class AllExpensesService {
  constructor(private http: HttpClient) { }


  getAllExpenses(): Observable<ExpenseModel[]>{
    return this.http.get<ExpenseModel[]>('http://localhost:8080/api/expenses/find/all');
  }

  findExpenseById(id: number){
    return this.http.get('http://localhost:8080/api/expenses/find/' + id);
  }


}
