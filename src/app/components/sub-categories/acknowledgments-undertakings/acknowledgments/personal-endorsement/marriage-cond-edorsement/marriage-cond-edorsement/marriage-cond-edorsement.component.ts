import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-cond-edorsement',
  templateUrl: './marriage-cond-edorsement.component.html',
  styleUrls: ['./marriage-cond-edorsement.component.scss']
})
export class MarriageCondEdorsementComponent implements OnInit {


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
