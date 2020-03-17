import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UndertakingsComponent } from './undertakings/undertakings.component';

const routes: Routes = [
  { path: '', component: UndertakingsComponent, data: { breadcrumb: 'التعهدات' }  },
  { path: 'CARRYING_RESPONSABILITY_COMMITMENT', loadChildren: () => import('./carrying-responsability-commitment/carrying-responsability-commitment.module').then(m => m.CarryingResponsabilityCommitmentModule) },
  { path: 'CARRYING_LABOR_COST_COMMITMENT', loadChildren: () => import('./carrying-labor-cost-commitment/carrying-labor-cost-commitment.module').then(m => m.CarryingLaborCostCommitmentModule) },
  { path: 'HOUSING_COMMITMENT', loadChildren: () => import('./housing-commitment/housing-commitment.module').then(m => m.HousingCommitmentModule) },
  { path: 'SYSTENANCE_COMMITMENT', loadChildren: () => import('./systenance-commitment/systenance-commitment.module').then(m => m.SystenanceCommitmentModule) },
  { path: 'personal-commitments', loadChildren: () => import('./personal-commitments/personal-commitments.module').then(m => m.PersonalCommitmentsModule), data: { breadcrumb: 'تعهدات الأحوال الشخصية' } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UndertakingsRoutingModule { }
