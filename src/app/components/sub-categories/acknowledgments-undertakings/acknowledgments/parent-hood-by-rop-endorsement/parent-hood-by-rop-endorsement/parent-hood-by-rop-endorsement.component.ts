import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-hood-by-rop-endorsement',
  templateUrl: './parent-hood-by-rop-endorsement.component.html',
  styleUrls: ['./parent-hood-by-rop-endorsement.component.scss']
})
export class ParentHoodByRopEndorsementComponent implements OnInit {


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
