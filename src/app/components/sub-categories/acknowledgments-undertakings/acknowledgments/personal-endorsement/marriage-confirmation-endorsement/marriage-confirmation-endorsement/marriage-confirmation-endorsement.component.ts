import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-confirmation-endorsement',
  templateUrl: './marriage-confirmation-endorsement.component.html',
  styleUrls: ['./marriage-confirmation-endorsement.component.scss']
})
export class MarriageConfirmationEndorsementComponent implements OnInit {

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
