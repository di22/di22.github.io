import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-discharge',
  templateUrl: './marriage-discharge.component.html',
  styleUrls: ['./marriage-discharge.component.scss']
})
export class MarriageDischargeComponent implements OnInit {

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
