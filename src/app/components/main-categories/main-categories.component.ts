import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store';


@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.scss']
})
export class MainCategoriesComponent implements OnInit {


  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }
}
