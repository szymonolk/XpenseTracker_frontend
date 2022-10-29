import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpenseModel} from "./models/ExpenseModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) {
  }
}
