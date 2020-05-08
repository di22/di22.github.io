import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IconService} from '../../services/icon.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  url: string;
  routes = ['Agencies'];
  isMain: boolean;
  constructor(private router: Router, private iconService: IconService,) {
    this.iconService.registerIcons();
  }

  ngOnInit() {
    this.url = this.router.url.slice(this.router.url.lastIndexOf('/'), this.router.url.length).substr(1);
    this.isMain = !this.routes.includes(this.url);
  }

}
