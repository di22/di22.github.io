import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  url: string;
  routes = ['Agencies'];
  isMain: boolean;
  constructor(private router: Router,
              private activatedRout: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.router.url.slice(this.router.url.lastIndexOf('/'), this.router.url.length).substr(1);
    if (this.routes.includes(this.url)) {
      this.isMain = false;
    } else {
      this.isMain = true;
    }
  }

}
