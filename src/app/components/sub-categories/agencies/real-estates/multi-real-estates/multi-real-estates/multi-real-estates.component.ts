import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-real-estates',
  templateUrl: './multi-real-estates.component.html',
  styleUrls: ['./multi-real-estates.component.scss']
})
export class MultiRealEstatesComponent implements OnInit {
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
