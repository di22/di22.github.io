import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildingReceiptEndorsementComponent } from './building-receipt-endorsement/building-receipt-endorsement.component';

const routes: Routes = [
  { path: '', component: BuildingReceiptEndorsementComponent, data: { breadcrumb: 'إقرار بإستلام المبنى من المستأجر/المستثمر', transactionId: 91 }  },
  { path: ':requestId', component: BuildingReceiptEndorsementComponent, data: { breadcrumb: 'إقرار بإستلام المبنى من المستأجر/المستثمر', transactionId: 91 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingReceiptEndorsementRoutingModule { }
