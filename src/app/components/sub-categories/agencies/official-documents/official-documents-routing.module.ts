import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficialDocumentsComponent } from './official-documents/official-documents.component';

const routes: Routes = [
  { path: '', component: OfficialDocumentsComponent, data: { breadcrumb: 'وكالة في إستخراج وثائق رسمية', transactionId: 210 }  },
  { path: ':requestId', component: OfficialDocumentsComponent, data: { breadcrumb: 'وكالة في إستخراج وثائق رسمية', transactionId: 210 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficialDocumentsRoutingModule { }
