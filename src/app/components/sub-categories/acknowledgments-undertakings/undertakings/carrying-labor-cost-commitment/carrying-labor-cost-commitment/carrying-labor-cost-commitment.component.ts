import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrying-labor-cost-commitment',
  templateUrl: './carrying-labor-cost-commitment.component.html',
  styleUrls: ['./carrying-labor-cost-commitment.component.scss']
})
export class CarryingLaborCostCommitmentComponent implements OnInit {
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
