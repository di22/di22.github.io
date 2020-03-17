import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrying-responsability-commitment',
  templateUrl: './carrying-responsability-commitment.component.html',
  styleUrls: ['./carrying-responsability-commitment.component.scss']
})
export class CarryingResponsabilityCommitmentComponent implements OnInit {
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
