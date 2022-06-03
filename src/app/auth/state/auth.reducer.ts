import { createReducer, on } from "@ngrx/store";
import { autoLogout, loginSuccess, signupSucess } from "./auth.actions";
import { authState } from "./auth.state";

export const _authReducer = createReducer(authState,
    on(loginSuccess,(state,action)=>{
        return {
            ...state,
            user: action.user,
        }
    }),
    on(signupSucess,(state:any,action)=>{
        return {
            ...state,
            user: action.user
        }
    }),
    on(autoLogout,(state)=>{
        return {
            ...state,
            user:null
        }
    })
)

export function AuthReducer(state:any,action:any){
    return _authReducer(state,action)
}