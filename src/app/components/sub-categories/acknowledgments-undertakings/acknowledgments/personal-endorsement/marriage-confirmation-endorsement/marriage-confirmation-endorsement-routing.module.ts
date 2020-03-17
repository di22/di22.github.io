import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageConfirmationEndorsementComponent } from './marriage-confirmation-endorsement/marriage-confirmation-endorsement.component';

const routes: Routes = [
  { path: '', component: MarriageConfirmationEndorsementComponent, data: { breadcrumb: 'إقرار الزوجة بالموافقة لزوجها بالزواج من أخرى', transactionId: 16702 } },
  { path: ':requestId', component: MarriageConfirmationEndorsementComponent, data: { breadcrumb: 'إقرار الزوجة بالموافقة لزوجها بالزواج من أخرى', transactionId: 16702 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageConfirmationEndorsementRoutingModule { }
