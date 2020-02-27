import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clearing-workers-transactions',
  templateUrl: './clearing-workers-transactions.component.html',
  styleUrls: ['./clearing-workers-transactions.component.scss']
})
export class ClearingWorkersTransactionsComponent implements OnInit {


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
