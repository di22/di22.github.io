import * as fromEmployees from '../reducers/employees.reducer';
import { selectEmployeesState } from './employees.selectors';

describe('Employees Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEmployeesState({
      [fromEmployees.employeesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
