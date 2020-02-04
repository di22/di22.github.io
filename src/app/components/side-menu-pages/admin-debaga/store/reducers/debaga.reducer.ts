import { Action, createReducer, on } from '@ngrx/store';
import * as DebagaActions from '../actions/debaga.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Debaga} from '../debaga.model';

export const debagasFeatureKey = 'debagas';

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
  on(DebagaActions.addDebagaSuccess,
    (state, action) => adapter.addOne(action.debaga, state)
  ),
  on(DebagaActions.upsertDebagaSuccess,
    (state, action) => adapter.upsertOne(action.debaga, state)
  ),
  on(DebagaActions.addDebagas,
    (state, action) => adapter.addMany(action.debagas, state)
  ),
  on(DebagaActions.upsertDebagas,
    (state, action) => adapter.upsertMany(action.debagas, state)
  ),
  on(DebagaActions.updateDebagaSuccess,
    (state, action) => adapter.updateOne(action.debaga, state)
  ),
  on(DebagaActions.updateDebagas,
    (state, action) => adapter.updateMany(action.debagas, state)
  ),
  on(DebagaActions.deleteDebagaSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(DebagaActions.deleteDebagas,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(DebagaActions.loadDebagasSuccess,
    (state, action) => adapter.addAll(action.debagas, state)
  ),
  on(DebagaActions.clearDebagas,
    state => adapter.removeAll(state)
  ),
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
