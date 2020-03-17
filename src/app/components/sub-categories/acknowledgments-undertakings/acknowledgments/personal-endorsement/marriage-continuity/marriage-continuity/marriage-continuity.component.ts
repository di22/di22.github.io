import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-continuity',
  templateUrl: './marriage-continuity.component.html',
  styleUrls: ['./marriage-continuity.component.scss']
})
export class MarriageContinuityComponent implements OnInit {


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
