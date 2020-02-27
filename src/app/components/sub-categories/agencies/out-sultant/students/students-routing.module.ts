import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent, data: { breadcrumb: 'وكالة الطلاب والدارسين', transactionId: 218 }  },
  { path: ':requestId', component: StudentsComponent, data: { breadcrumb: 'وكالة الطلاب والدارسين', transactionId: 218 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
