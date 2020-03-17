import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-receipt-endorsement',
  templateUrl: './building-receipt-endorsement.component.html',
  styleUrls: ['./building-receipt-endorsement.component.scss']
})
export class BuildingReceiptEndorsementComponent implements OnInit {


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
