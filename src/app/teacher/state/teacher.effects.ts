import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { catchError } from "rxjs";
import { map } from "rxjs";
import { mergeMap } from "rxjs";
import { TeacherService } from "src/app/services/teacher.service";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { loadStudentList, loadStudentListSuccess } from "./teacher.actions";

@Injectable()
export class TeacherEffects {
    constructor(private action$:Actions,private teacherService:TeacherService , private store:Store ,private toastr:ToastrService){}

    loadPostsList$ = createEffect((): any => {
        this.store.dispatch(setLoadingSpinner({ status: true }))
        return this.action$.pipe(
            ofType(loadStudentList),
            mergeMap((action) => {
                return this.teacherService.getStudentList()
                    .pipe(
                        map((data: any) => {
                            this.toastr.success("Student data showed !");
                            console.log('data :>> ', data);
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                            return loadStudentListSuccess({student:data.data})
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
}