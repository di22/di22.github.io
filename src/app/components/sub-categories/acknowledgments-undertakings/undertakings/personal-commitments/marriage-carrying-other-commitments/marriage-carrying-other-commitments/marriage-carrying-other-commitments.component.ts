import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-carrying-other-commitments',
  templateUrl: './marriage-carrying-other-commitments.component.html',
  styleUrls: ['./marriage-carrying-other-commitments.component.scss']
})
export class MarriageCarryingOtherCommitmentsComponent implements OnInit {

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
