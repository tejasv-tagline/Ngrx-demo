import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { changeName, customDecrement, customIncrement, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action: any) => {
        return {
            ...state,
            counter: state.counter + action.counter
        }
    }),
    on(customDecrement, (state, action: any) => {
        return {
            ...state,
            counter: state.counter - action.counter
        }
    }),
    on(changeName,state=>{
        return{
            ...state,
            name:'Tejas Variya'
        }
    })
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}