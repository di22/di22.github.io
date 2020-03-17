import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-endorsement',
  templateUrl: './general-endorsement.component.html',
  styleUrls: ['./general-endorsement.component.scss']
})
export class GeneralEndorsementComponent implements OnInit {


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
