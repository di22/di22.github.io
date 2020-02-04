import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-real-estates',
  templateUrl: './one-real-estates.component.html',
  styleUrls: ['./one-real-estates.component.scss']
})
export class OneRealEstatesComponent implements OnInit {
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
