import { Component, OnInit } from '@angular/core';
import {onMainContentChange} from '../animations/animations';
import {SideMenuService} from '../services/side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [ onMainContentChange ]
})
export class SideMenuComponent implements OnInit {
  onSideNavChange: boolean;
  constructor(private sideMenuService: SideMenuService) { }

  ngOnInit() {
    this.sideMenuService.sideNavState$.subscribe( res => {
      this.onSideNavChange = res;
    });
  }

}
