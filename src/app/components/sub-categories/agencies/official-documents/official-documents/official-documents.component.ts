import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-official-documents',
  templateUrl: './official-documents.component.html',
  styleUrls: ['./official-documents.component.scss']
})
export class OfficialDocumentsComponent implements OnInit {

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
