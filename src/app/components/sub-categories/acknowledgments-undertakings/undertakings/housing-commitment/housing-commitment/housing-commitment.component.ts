import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing-commitment',
  templateUrl: './housing-commitment.component.html',
  styleUrls: ['./housing-commitment.component.scss']
})
export class HousingCommitmentComponent implements OnInit {
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
