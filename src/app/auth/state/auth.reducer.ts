import { createReducer, on } from "@ngrx/store";
import { loginSuccess, signupSucess } from "./auth.actions";
import { initialState } from "./auth.state";

export const _authReducer = createReducer(initialState,
    on(loginSuccess,(state,action)=>{
        console.log('action :>> ', action);
        console.log('state :>> ', state);
        return {
            ...state,
            user: action.user
        }
    }),
    on(signupSucess,(state:any,action)=>{
        return {
            ...state,
            user: action.user
        }
    })  
)

export function AuthReducer(state:any,action:any){
    return _authReducer(state,action)
}