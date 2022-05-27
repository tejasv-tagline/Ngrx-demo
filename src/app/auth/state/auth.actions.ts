import { createAction, props } from "@ngrx/store";
import { SignupUser } from "src/app/models/signupUser.model";
import { User } from "src/app/models/user.model";

export const LOGIN_START = '[ auth page ] login start';
export const LOGIN_SUCCESS = '[ auth page ] login success';
export const LOGIN_FAIL = '[ auth page ] login fail';

export const SIGNUP_START = '[ auth page ] signup start';
export const SIGNUP_SUCCESS = '[ auth page ] signup success';

export const AUTO_LOGIN = '[ auth page ] auto login';
export const AUTO_LOGOUT = " [ auth page] auto logout";

export const loginStart = createAction(LOGIN_START, props<{ email: any, password: any }>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User; redirect:boolean }>());
export const loginFail = createAction(LOGIN_FAIL);

export const signupStart = createAction(SIGNUP_START, props<{ name: string, email: string, password: string, role: string }>());
export const signupSucess = createAction(SIGNUP_SUCCESS, props<{ user: SignupUser, redirect:boolean }>());

export const autoLogin = createAction(AUTO_LOGIN);
export const autoLogout = createAction(AUTO_LOGOUT);