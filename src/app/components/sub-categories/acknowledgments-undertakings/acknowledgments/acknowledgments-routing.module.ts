import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcknowledgmentsComponent } from './acknowledgments/acknowledgments.component';

const routes: Routes = [
  { path: '', component: AcknowledgmentsComponent, data: { breadcrumb: 'الإقرارات ' } },
  { path: 'DEBIT_ENDORSEMENT', loadChildren: () => import('./debit-endorsement/debit-endorsement.module').then(m => m.DebitEndorsementModule) },
  { path: 'RECEIPT_PERSONAL_ENDORSEMENT', loadChildren: () => import('./receipt-personal-endorsement/receipt-personal-endorsement.module').then(m => m.ReceiptPersonalEndorsementModule) },
  { path: 'BUILDING_RECEIPT_ENDORSEMENT', loadChildren: () => import('./building-receipt-endorsement/building-receipt-endorsement.module').then(m => m.BuildingReceiptEndorsementModule) },
  { path: 'PARENTHOOD_BY_ROP_ENDORSEMENT', loadChildren: () => import('./parent-hood-by-rop-endorsement/parent-hood-by-rop-endorsement.module').then(m => m.ParentHoodByRopEndorsementModule) },
  { path: 'GENERAL_ENDORSEMENT', loadChildren: () => import('./general-endorsement/general-endorsement.module').then(m => m.GeneralEndorsementModule) },
  { path: 'personal-endorsement', loadChildren: () => import('./personal-endorsement/personal-endorsement.module').then(m => m.PersonalEndorsementModule), data: { breadcrumb: 'إقرارات الأحوال الشخصية ' }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcknowledgmentsRoutingModule { }
