import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcknowledgmentsUndertakingsComponent } from './acknowledgments-undertakings/acknowledgments-undertakings.component';

const routes: Routes = [
  { path: '', component: AcknowledgmentsUndertakingsComponent, data: { breadcrumb: 'الإقرارات والتعهدات' } },
  { path: 'undertakings', loadChildren: () => import('./undertakings/undertakings.module').then(m => m.UndertakingsModule), data: { breadcrumb: 'التعهدات' }  },
  { path: 'acknowledgments', loadChildren: () => import('./acknowledgments/acknowledgments.module').then(m => m.AcknowledgmentsModule), data: { breadcrumb: 'الإقرارات ' }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcknowledgmentsUndertakingsRoutingModule { }
