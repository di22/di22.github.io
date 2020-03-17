import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-carrying-other-commitments',
  templateUrl: './marriage-carrying-other.component.html',
  styleUrls: ['./marriage-carrying-other.component.scss']
})
export class MarriageCarryingOtherComponent implements OnInit {

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
