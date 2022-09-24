import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
  })

  createNewExpense(){
    console.log(this.newExpenseForm.value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
