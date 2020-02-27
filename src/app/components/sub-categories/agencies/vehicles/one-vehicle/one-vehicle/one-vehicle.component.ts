import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-vehicle',
  templateUrl: './one-vehicle.component.html',
  styleUrls: ['./one-vehicle.component.scss']
})
export class OneVehicleComponent implements OnInit {

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
