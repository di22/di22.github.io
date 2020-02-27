import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-councils',
  templateUrl: './public-councils.component.html',
  styleUrls: ['./public-councils.component.scss']
})
export class PublicCouncilsComponent implements OnInit {

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
