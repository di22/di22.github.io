import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {MaterialModule} from '../material/material.module';
import {CommonSharedModule} from '../common/common.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    MaterialModule,
    CommonSharedModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}]
})
export class AuthModule { }
