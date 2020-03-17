import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-personal-endorsement',
  templateUrl: './receipt-personal-endorsement.component.html',
  styleUrls: ['./receipt-personal-endorsement.component.scss']
})
export class ReceiptPersonalEndorsementComponent implements OnInit {


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
