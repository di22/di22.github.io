import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finishing-marriage',
  templateUrl: './finishing-marriage.component.html',
  styleUrls: ['./finishing-marriage.component.scss']
})
export class FinishingMarriageComponent implements OnInit {

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
