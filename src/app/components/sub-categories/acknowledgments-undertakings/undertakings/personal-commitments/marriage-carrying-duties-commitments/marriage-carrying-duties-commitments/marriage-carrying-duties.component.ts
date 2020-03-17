import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-carrying-duties-commitments',
  templateUrl: './marriage-carrying-duties.component.html',
  styleUrls: ['./marriage-carrying-duties.component.scss']
})
export class MarriageCarryingDutiesComponent implements OnInit {
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
