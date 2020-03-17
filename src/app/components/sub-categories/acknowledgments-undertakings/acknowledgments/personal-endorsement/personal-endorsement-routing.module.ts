import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalEndorsementComponent } from './personal-endorsement/personal-endorsement.component';

const routes: Routes = [
  { path: '', component: PersonalEndorsementComponent},
  { path: 'MARRIAGE_CONTINUITY', loadChildren: () => import('./marriage-continuity/marriage-continuity.module').then(m => m.MarriageContinuityModule) },
  { path: 'MARRIAGE_COND_ENDORSEMENT', loadChildren: () => import('./marriage-cond-edorsement/marriage-cond-edorsement.module').then(m => m.MarriageCondEdorsementModule) },
  { path: 'MARRIAGE_CONFIRMATION_ENDORSEMENT', loadChildren: () => import('./marriage-confirmation-endorsement/marriage-confirmation-endorsement.module').then(m => m.MarriageConfirmationEndorsementModule) },
  { path: 'MARRIAGE_LATE_DEBIT_ENDORSEMENT', loadChildren: () => import('./marriage-late-debit-endorsement/marriage-late-debit-endorsement.module').then(m => m.MarriageLateDebitEndorsementModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalEndorsementRoutingModule { }
