import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as fromAuth from '../store/auth.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {loadAuth} from '../store/auth.actions';
import {State} from '../../store';
import {IconService} from '../../services/icon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  authState: Observable<fromAuth.State>;
  constructor(private formBuilder: FormBuilder,
              private store: Store<State>,
              private iconService: IconService) {
    this.iconService.registerIcons();
  }

  ngOnInit() {
    this.initForms();
    this.authState = this.store.select('auth');
  }
initForms = () => {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
}

logIn = (credintial) => {
this.store.dispatch(loadAuth(credintial));
}

}
