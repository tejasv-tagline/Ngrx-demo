import { createAction } from "@ngrx/store";

export const increment = createAction("[ INC ] incrementTypre");
export const decrement = createAction("decrement");
export const reset = createAction("reset");