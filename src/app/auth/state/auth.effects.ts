import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { Observable, switchMap, tap } from "rxjs";
import { exhaustMap } from "rxjs-compat/operator/exhaustMap";
import { LoginRespone } from "src/app/models/common";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { loginFail, loginStart, loginSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>) {

    }
    loadPostsList$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                console.log('action :>> ', action);

                return this.authService.login(action.email, action.password).pipe(map((data: LoginRespone) => {
                    
                    console.log('data :>> ', data?.data);
                    const user = this.authService.formatUser(data?.data);
                    this.store.dispatch(setLoadingSpinner({ status: false }))
                    
                    return loginSuccess({ user });
                }))
            })
        )
    });

}