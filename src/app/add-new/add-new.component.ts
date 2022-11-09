import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Priority} from "../models/Priority";
import {ExpenseModel} from "../models/ExpenseModel";
import {ExpenseService} from "../expense.service";
import {AddNewService} from "./add-new.service";


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  expenseModel: ExpenseModel = {cost: 0, expenseName: "", priority: "", description: ""};

  newExpenseForm = new FormGroup({
    expenseName: new FormControl(' '),
    cost: new FormControl(' '),
    priority: new FormControl(' '),
    date: new FormControl(' ')
  });

  allPriorities = [
    new Priority('Low'),
    new Priority('Medium'),
    new Priority('High')
  ];

  onSubmit(expenseModel: ExpenseModel) {
    console.log(expenseModel);
    this.expenseModel = {cost: 0, expenseName: "", priority: "", description: ""};
    this.createNew(expenseModel);
  }

  createNew(expenseModel: ExpenseModel) {
    this.addNewService.createNewExpense(expenseModel).subscribe();
    this.expenseModel = {cost: 0, expenseName: "", priority: "", description: ""};
  }

  constructor(private addNewService: AddNewService) {
  }

  ngOnInit(): void {
  }

}
