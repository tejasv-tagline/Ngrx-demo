import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "src/app/models/user.model";
import { AUTH_STATE_NAME } from "./auth.selector";

export interface Authstate {
    user: User | null
};

export const initialState: Authstate = {
    user: null
};

const getAuthState = createFeatureSelector<Authstate>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
    return state.user ? true : false ; 
})