import { createAction, props } from "@ngrx/store";

export const LOAD_STUDENT_LIST = '[Teacher page] student list';
export const LOAD_STUDENT_LIST_SUCCESS = '[Teacher page] student list load success';
export const CREATE_EXAM = '[Teacher page] create exam';
export const CREATE_EXAM_SUCCESS = '[Teacher page] create exam success';
export const VIEW_EXAMS = '[Teacher page] view exams';
export const VIEW_EXAMS_SUCCESS = '[Teacher page] view exams success';

export const loadStudentList = createAction(LOAD_STUDENT_LIST)
export const loadStudentListSuccess = createAction(LOAD_STUDENT_LIST_SUCCESS,props <{student:any}>())

export const createExam = createAction(CREATE_EXAM,props <{exam:any}>())
export const createExamSuccess = createAction(CREATE_EXAM_SUCCESS,props <{exam:any}>())

export const viewExams = createAction(VIEW_EXAMS);
export const viewExamsSuccess = createAction(VIEW_EXAMS_SUCCESS,props<{examList:any}>())