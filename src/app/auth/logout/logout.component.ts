import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {logout} from '../store/auth.actions';
import {Observable} from 'rxjs';
import * as fromAuth from '../store/auth.reducer';
import {State} from '../../store';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }
logout = () => {
this.store.dispatch(logout());
}

}
