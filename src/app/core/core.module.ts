import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {MaterialModule} from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './home/app.component';
import {RouterModule} from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LogoutComponent } from '../auth/logout/logout.component';
import {StoreModule} from '@ngrx/store';
import * as fromSideMenu from './side-menu/store/side-menu.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SideMenuEffects} from './side-menu/store/side-menu.effects';
import { RightMenuComponent } from './right-menu/right-menu.component';
import {CommonSharedModule} from '../common/common.module';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    LayoutComponent,
    AppComponent,
    BrandComponent,
    SpinnerComponent,
    LogoutComponent,
    RightMenuComponent,
    BreadCrumbsComponent
  ],

  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    StoreModule.forFeature(fromSideMenu.sideMenuFeatureKey, fromSideMenu.reducer),
    EffectsModule.forFeature([SideMenuEffects]),
    CommonSharedModule,
    NgxSpinnerModule]
})
export class CoreModule { }
