import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalCommitmentsComponent } from './personal-commitments/personal-commitments.component';

const routes: Routes = [
  { path: '', component: PersonalCommitmentsComponent },
  { path: 'MARRIAGE_CARRYING_DUTIES_COMMITMENT', loadChildren: () => import('./marriage-carrying-duties-commitments/marriage-carrying-duties-commitments.module').then(m => m.MarriageCarryingDutiesCommitmentsModule) },
  { path: 'MARRIAGE_CARRYING_OTHER_COMMITMENT', loadChildren: () => import('./marriage-carrying-other-commitments/marriage-carrying-other-commitments.module').then(m => m.MarriageCarryingOtherCommitmentsModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCommitmentsRoutingModule { }
