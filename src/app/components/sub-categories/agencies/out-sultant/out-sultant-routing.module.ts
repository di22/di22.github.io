import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutSultantComponent } from './out-sultant/out-sultant.component';

const routes: Routes = [
  { path: '', component: OutSultantComponent, data: { breadcrumb: 'وكالات خارج السلطنة' }  },
  { path: 'out-sultant', component: OutSultantComponent, data: { breadcrumb: 'وكالات خارج السلطنة' }  },
  { path: 'POA_STUDENTS', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutSultantRoutingModule { }
