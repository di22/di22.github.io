import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divorce',
  templateUrl: './divorce.component.html',
  styleUrls: ['./divorce.component.scss']
})
export class DivorceComponent implements OnInit {


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
