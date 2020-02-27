import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial-present',
  templateUrl: './commercial-present.component.html',
  styleUrls: ['./commercial-present.component.scss']
})
export class CommercialPresentComponent implements OnInit {

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
