import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Profile] Increment', 
  props<{name: string, email: string}>()
);

export const decrement = createAction('[Profile] Decrement');

export const reset = createAction('[Profile] Reset');