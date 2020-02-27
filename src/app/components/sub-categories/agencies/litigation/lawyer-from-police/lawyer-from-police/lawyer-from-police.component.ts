import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawyer-from-police',
  templateUrl: './lawyer-from-police.component.html',
  styleUrls: ['./lawyer-from-police.component.scss']
})
export class LawyerFromPoliceComponent implements OnInit {

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
