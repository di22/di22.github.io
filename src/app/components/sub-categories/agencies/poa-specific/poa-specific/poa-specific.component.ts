import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poa-specific',
  templateUrl: './poa-specific.component.html',
  styleUrls: ['./poa-specific.component.scss']
})
export class PoaSpecificComponent implements OnInit {

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
