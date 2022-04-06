import { createAction, props } from "@ngrx/store";
import { counterState } from "./counter.state";

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");

export const customIncrement = createAction('customIncrement', props<counterState>())
export const customDecrement = createAction('customDecrement', props<counterState>())