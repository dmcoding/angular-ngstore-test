import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/profile.actions';

export const initialState = {
  name: null,
  email: null
};

export const profileReducer = createReducer(initialState, 
  on(increment, (state, data) => {
    Object.keys(state).forEach(key => {
      if ('' + key in data) {
        state[key] = data[key];
      }
    })
    return state;
  }),
  on(decrement, state => {}),
  on(reset, state => {})
);