import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-share',
  templateUrl: './sale-share.component.html',
  styleUrls: ['./sale-share.component.scss']
})
export class SaleShareComponent implements OnInit {

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
