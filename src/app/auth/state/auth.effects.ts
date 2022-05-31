import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { Observable, switchMap, tap } from "rxjs";
import { LoginRespone } from "src/app/models/common";
import { AuthService } from "src/app/services/auth.service";
import { AppState } from "src/app/store/app.state";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { autoLogin, autoLogout, loginFail, loginStart, loginSuccess, signupStart, signupSucess } from "./auth.actions";

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
                return this.authService.login(action.email, action.password)
                    .pipe(
                        map((data: LoginRespone) => {
                            const user = this.authService.formatUser(data?.data);
                            // localStorage.setItem('userData',JSON.stringify(data.data));
                            this.authService.setUserToLocatStorage(data?.data);
                            this.toastr.success("Login successfull");
                            this.store.dispatch(setLoadingSpinner({ status: false }))

                            return loginSuccess({ user, redirect: true });
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
                if (action.redirect) {
                    this.router.navigate(['/'])
                }
            })
        )
    },
        { dispatch: false }
    )

    signupUser$ = createEffect((): any => {
        return this.actions$.pipe(ofType(signupStart),
            mergeMap((action) => {
                return this.authService.signup(action.name, action.email, action.password, action.role)
                    .pipe(
                        map((data: any) => {
                            const user = this.authService.formatNewUser(data?.data)
                            this.authService.setUserToLocatStorage(data?.data);
                            this.toastr.success("Signup Successfull");
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                            return signupSucess({ user, redirect: true })
                        }),
                        catchError((error) => {
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.toastr.error(error);
                            return error;
                        })
                    )
            }))
    })

    autoLogin$ = createEffect((): any => {
        return this.actions$.pipe(ofType(autoLogin),
            switchMap((action): any => {
                const user = this.authService.getUserFromLocalStorage();
                return of(loginSuccess({ user, redirect: false }))
            })
        )
    }

    )

    logout$ = createEffect((): any => {
        return this.actions$.pipe(ofType(autoLogout),
            map((action): any => {
                localStorage.removeItem('userData');
                localStorage.removeItem('token');
                this.router.navigate(['auth']);
            })
        )
    }, { dispatch: false })
}