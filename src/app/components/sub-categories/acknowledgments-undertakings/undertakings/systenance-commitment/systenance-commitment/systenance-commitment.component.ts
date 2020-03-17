import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-systenance-commitment',
  templateUrl: './systenance-commitment.component.html',
  styleUrls: ['./systenance-commitment.component.scss']
})
export class SystenanceCommitmentComponent implements OnInit {

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
