import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Priority} from "../models/Priority";
import {ExpenseModel} from "../models/ExpenseModel";


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

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

  createNewExpense(){
    console.log(this.newExpenseForm.value);
    this.newExpenseForm.reset();
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

}
