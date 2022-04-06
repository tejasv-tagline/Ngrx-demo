import { createAction, props } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const reset = createAction("reset");


export const customIncrement = createAction('customIncrement', props<{ counter: number }>())
export const customDecrement = createAction('customDecrement', props<{ counter: number }>())

export const changeName= createAction('changeName') 