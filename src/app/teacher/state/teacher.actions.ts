import { createAction, props } from "@ngrx/store";

export const LOAD_STUDENT_LIST = '[Teacher page] student list';
export const LOAD_STUDENT_LIST_SUCCESS = '[Teacher page] student list load success';


export const loadStudentList = createAction(LOAD_STUDENT_LIST)
export const loadStudentListSuccess = createAction(LOAD_STUDENT_LIST_SUCCESS,props <{student:any}>())