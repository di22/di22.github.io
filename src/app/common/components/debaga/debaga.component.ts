import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {FormBuilder} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-debaga',
  templateUrl: './debaga.component.html',
  styleUrls: ['./debaga.component.scss']
})
export class DebagaComponent implements OnInit {

  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private activatedRout: ActivatedRoute) { }

  ngOnInit() {
  }

}
