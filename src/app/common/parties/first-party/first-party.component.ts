import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-first-party',
  templateUrl: './first-party.component.html',
  styleUrls: ['./first-party.component.scss']
})
export class FirstPartyComponent implements OnInit {

  firstForm: FormGroup;
  constructor() { }

  ngOnInit() {}


}
