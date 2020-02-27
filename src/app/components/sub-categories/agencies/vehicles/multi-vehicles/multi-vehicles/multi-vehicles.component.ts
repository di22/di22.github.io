import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-vehicles',
  templateUrl: './multi-vehicles.component.html',
  styleUrls: ['./multi-vehicles.component.scss']
})
export class MultiVehiclesComponent implements OnInit {

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
