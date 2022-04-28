import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { Observable, switchMap, tap } from "rxjs";
import { exhaustMap } from "rxjs-compat/operator/exhaustMap";
import { LoginRespone } from "src/app/models/common";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { loginFail, loginStart, loginSuccess, signupStart, signupSucess } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private toastr: ToastrService,
        private router: Router
    ) { }
    loadPostsList$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                console.log('action :>> ', action);

                return this.authService.login(action.email, action.password)
                    .pipe(
                        map((data: LoginRespone) => {
                            const user = this.authService.formatUser(data?.data);
                            this.toastr.success("Login successfull");
                            this.store.dispatch(setLoadingSpinner({ status: false }))

                            return loginSuccess({ user });
                        }),
                        catchError((error) => {
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.toastr.error(error);
                            return error;
                        })
                    )
            })
        )
    });

    loginRedirect$ = createEffect((): any => {
        return this.actions$.pipe(ofType(...[loginSuccess, signupSucess]),
            tap((action: any) => {
                this.router.navigate(['/'])
            })
        )
    },
        { dispatch: false }
    )

    signupUser$ = createEffect((): any => {
        return this.actions$.pipe(ofType(signupStart),
            mergeMap((action) => {
                console.log('action :>> ', action);
                return this.authService.signup(action.name, action.email, action.password, action.role)
                    .pipe(
                        map((data: any) => {
                            const user = this.authService.formatNewUser(data?.data)
                            console.log('data :>> ', data);
                            this.toastr.success("Signup Successfull");
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                            return signupSucess({ user })
                        }),
                        catchError((error) => {
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.toastr.error(error);
                            return error;
                        })
                    )
            }))
    })

}