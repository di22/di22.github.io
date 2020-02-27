import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial-registry',
  templateUrl: './commercial-registry.component.html',
  styleUrls: ['./commercial-registry.component.scss']
})
export class CommercialRegistryComponent implements OnInit {

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
