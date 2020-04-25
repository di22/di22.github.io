import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-second-party',
  templateUrl: './second-party.component.html',
  styleUrls: ['./second-party.component.scss']
})
export class SecondPartyComponent implements OnInit {

  secondForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
