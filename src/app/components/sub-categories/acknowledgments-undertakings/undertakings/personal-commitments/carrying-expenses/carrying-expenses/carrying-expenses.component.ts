import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrying-expenses',
  templateUrl: './carrying-expenses.component.html',
  styleUrls: ['./carrying-expenses.component.scss']
})
export class CarryingExpensesComponent implements OnInit {
  step = 0;
  constructor() { }

  ngOnInit() {
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
