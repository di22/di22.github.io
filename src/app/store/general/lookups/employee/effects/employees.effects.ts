import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as EmployeesActions from '../actions/employees.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class EmployeesEffects {

  loadEmployeess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EmployeesActions.loadEmployees),
      concatMap(() =>
        this.lookupsService.getAllEmployee().pipe(
          map(employees =>  employees.data.searchResults.allEmployee.results ),
          map(employees => EmployeesActions.loadEmployeesSuccess({ employees })),
          catchError(error => of(EmployeesActions.loadEmployeesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
