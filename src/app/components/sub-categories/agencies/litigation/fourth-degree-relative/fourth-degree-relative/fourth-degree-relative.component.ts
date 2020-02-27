import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-degree-relative',
  templateUrl: './fourth-degree-relative.component.html',
  styleUrls: ['./fourth-degree-relative.component.scss']
})
export class FourthDegreeRelativeComponent implements OnInit {

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
