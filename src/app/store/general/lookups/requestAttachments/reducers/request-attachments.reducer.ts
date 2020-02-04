import { Action, createReducer, on } from '@ngrx/store';
import * as RequestAttachmentsActions from '../actions/request-attachments.actions';
import {RequestAttachments} from '../../../../../DTO`s/requestAttachments';

export const requestAttachmentsFeatureKey = 'requestAttachments';

export interface State {
requestAttachments: RequestAttachments[];
error: any;
}

export const initialState: State = {
  requestAttachments: [],
  error: null
};

const requestAttachmentsReducer = createReducer(
  initialState,

  on(RequestAttachmentsActions.loadRequestAttachmentss, state => state),
  on(RequestAttachmentsActions.loadRequestAttachmentssSuccess, (state, action) => ({state, requestAttachments: action.data, error: null})),
  on(RequestAttachmentsActions.loadRequestAttachmentssFailure, (state, action) => ({state, error: action.error, requestAttachments: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return requestAttachmentsReducer(state, action);
}
