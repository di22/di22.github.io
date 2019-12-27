import { Action, createReducer, on } from '@ngrx/store';
import * as DebagaActions from '../actions/debaga.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const debagaFeatureKey = 'debaga';

export interface Debaga {
  id: number;
}
export interface State extends EntityState<Debaga> {
  selectedDebagaId: number;
  error: any;
}
export const adapter: EntityAdapter<Debaga> = createEntityAdapter<Debaga>({
  selectId: model => model.id
});
export const initialState: State = adapter.getInitialState({
  selectedDebagaId: null,
  error: null
});

const debagaReducer = createReducer(
  initialState,

  on(DebagaActions.loadDebagaSuccess, (state, action) => adapter.addAll(action.debaga, state)),
  on(DebagaActions.createDebagaSuccess, (state, action) => adapter.addOne(action.Debaga, state)),
  on(DebagaActions.updateDebagaSuccess, (state, action) => adapter.upsertOne(action.Debaga, state)),
  on(DebagaActions.deleteDebagaSuccess, (state, action) => adapter.removeOne(action.id, state))

);

export function reducer(state: State | undefined, action: Action) {
  return debagaReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
