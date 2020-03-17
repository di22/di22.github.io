import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-late-debit-endorsement',
  templateUrl: './marriage-late-debit-endorsement.component.html',
  styleUrls: ['./marriage-late-debit-endorsement.component.scss']
})
export class MarriageLateDebitEndorsementComponent implements OnInit {

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
