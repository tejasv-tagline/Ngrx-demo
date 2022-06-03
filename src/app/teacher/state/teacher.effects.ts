import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { catchError } from "rxjs";
import { map } from "rxjs";
import { mergeMap } from "rxjs";
import { TeacherService } from "src/app/services/teacher.service";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { createExam, createExamSuccess, deleteExam, deleteExamSuccess, loadStudentList, loadStudentListSuccess, viewExamsSuccess, viewParticulaExam, viewParticulaExamSuccess, VIEW_EXAMS } from "./teacher.actions";

@Injectable()
export class TeacherEffects {
    constructor(private action$: Actions, private teacherService: TeacherService, private store: Store, private toastr: ToastrService) { }

    loadStudentList$ = createEffect((): any => {
        return this.action$.pipe(
            ofType(loadStudentList),
            mergeMap((action) => {
                return this.teacherService.getStudentList()
                    .pipe(
                        map((data: any) => {
                            this.toastr.success("Student data showed !");
                            console.log('data :>> ', data);
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                            return loadStudentListSuccess({ student: data.data })
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

    viewExams$ = createEffect((): any => {
        return this.action$.pipe(
            ofType(VIEW_EXAMS)
            , mergeMap((action) => {
                return this.teacherService.viewExams()
                    .pipe(
                        map((res: any) => {
                            if (res.statusCode === 200) {
                                this.toastr.success(res.message);
                                this.store.dispatch(setLoadingSpinner({ status: false }))
                                return viewExamsSuccess({ examList: res.data })
                            } else {
                                this.toastr.error(res.message);
                                this.store.dispatch(setLoadingSpinner({ status: false }))
                                return false;
                            }
                        }),
                        catchError((error) => {
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.toastr.error(error);
                            return error;
                        })
                    )
            })
        )

    })

    createExam$ = createEffect((): any => {
        return this.action$.pipe(
            ofType(createExam),
            mergeMap((action) => {
                console.log('action.exam :>> ', action.exam);
                return this.teacherService.createExam(action.exam)
                    .pipe(
                        map((data: any) => {
                            console.log('data :>> ', data);
                            if (data.statusCode === 200) {
                                this.toastr.success(data.message);
                            } else {
                                this.toastr.error(data.message);

                            }
                            this.store.dispatch(setLoadingSpinner({ status: false }))
                        }),
                        catchError((error) => {
                            console.log('error :>> ', error);
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.toastr.error(error);
                            return error;
                        })
                    )
            })
        )
    }, { dispatch: false })

    deleteExam$ = createEffect((): any => {
        return this.action$.pipe(
            ofType(deleteExam), mergeMap((action: any) => {
                console.log('action :>> ', action);
                return this.teacherService.deleteExam(action.id)
                    .pipe(

                        map((res: any) => {
                            if (res.statusCode == 200) {
                                this.toastr.success(res.message);
                                this.store.dispatch(setLoadingSpinner({ status: false }));
                                return deleteExamSuccess(action);
                            } else {
                                this.toastr.success(res.message);
                                this.store.dispatch(setLoadingSpinner({ status: false }));
                                return
                            }
                        }),
                        catchError((error) => {
                            console.log('error :>> ', error);
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.toastr.error(error);
                            return error;
                        })
                    )
            })
        )
    })

    viewParticularExam$ = createEffect((): any => {
        return this.action$.pipe(
            ofType(viewParticulaExam), mergeMap((action: any) => {
                console.log('action :>> ', action);
                return this.teacherService.viewParticularExam(action.id)
                    .pipe(
                        map((res: any) => {
                            console.log('res :>> ', res);
                            if (res.statusCode == 200) {
                                this.toastr.success(res.message);
                                this.store.dispatch(setLoadingSpinner({ status: false }));
                                return viewParticulaExamSuccess(res.data);
                            } else {
                                this.toastr.success(res.message);
                                this.store.dispatch(setLoadingSpinner({ status: false }));
                                return
                            }
                        }),
                        catchError((error) => {
                            console.log('error :>> ', error);
                            this.store.dispatch(setLoadingSpinner({ status: false }));
                            this.toastr.error(error);
                            return error;
                        })
                    )
            })
        )
    })
}