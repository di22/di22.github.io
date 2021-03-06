import { Action, createReducer, on } from '@ngrx/store';
import * as RequestDebagaActions from '../actions/request-debaga.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {RequestDebaga} from '../request-debaga.model';

export const requestDebagaFeatureKey = 'requestDebaga';

export interface State extends EntityState<RequestDebaga> {
  debagaText: any;
}

export const adapter: EntityAdapter<RequestDebaga> = createEntityAdapter<RequestDebaga>();

export const initialState: State = adapter.getInitialState({
  debagaText: ''
});

const requestDebagaReducer = createReducer(
  initialState,
  on(RequestDebagaActions.addRequestDebagaSuccess,
    (state, action) => adapter.addOne(action.requestDebaga, state)
  ),
  on(RequestDebagaActions.addDebagaSuccess,
    (state, action) => ({state, debagaText: action.debaga, ids: state.ids, entities: state.entities})
  ),
  on(RequestDebagaActions.upsertRequestDebaga,
    (state, action) => adapter.upsertOne(action.requestDebaga, state)
  ),
  on(RequestDebagaActions.addRequestDebagas,
    (state, action) => adapter.addMany(action.requestDebagas, state)
  ),
  on(RequestDebagaActions.upsertRequestDebagas,
    (state, action) => adapter.upsertMany(action.requestDebagas, state)
  ),
  on(RequestDebagaActions.updateRequestDebagaSuccess,
    (state, action) => adapter.updateOne(action.requestDebaga, state)
  ),
  on(RequestDebagaActions.updateRequestDebagas,
    (state, action) => adapter.updateMany(action.requestDebagas, state)
  ),
  on(RequestDebagaActions.deleteRequestDebagaSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(RequestDebagaActions.deleteRequestDebagas,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(RequestDebagaActions.loadRequestDebagasSuccess,
    (state, action) => adapter.addAll(action.data, state)
  ),
  on(RequestDebagaActions.ResetDebagas,
    (state, action) => ({state, debagaText: '', ids: initialState.ids, entities: initialState.entities})
  )
);

export function reducer(state: State | undefined, action: Action) {
  return requestDebagaReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
