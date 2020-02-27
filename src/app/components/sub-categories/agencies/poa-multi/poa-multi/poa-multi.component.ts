import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poa-multi',
  templateUrl: './poa-multi.component.html',
  styleUrls: ['./poa-multi.component.scss']
})
export class PoaMultiComponent implements OnInit {

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
