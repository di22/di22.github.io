import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debit-endorsement',
  templateUrl: './debit-endorsement.component.html',
  styleUrls: ['./debit-endorsement.component.scss']
})
export class DebitEndorsementComponent implements OnInit {

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
