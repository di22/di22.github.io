import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holds-mangment',
  templateUrl: './holds-mangment.component.html',
  styleUrls: ['./holds-mangment.component.scss']
})
export class HoldsMangmentComponent implements OnInit {

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
