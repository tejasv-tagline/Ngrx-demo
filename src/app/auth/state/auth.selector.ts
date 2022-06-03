export const AUTH_STATE_NAME = 'auth';
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const getAuthState = createFeatureSelector<any>(AUTH_STATE_NAME);

export const getUser= createSelector(getAuthState,state=>{
    return state
})
