import { createAction, props } from "@ngrx/store";

export const LOAD_STUDENT_LIST = '[Teacher page] student list';
export const LOAD_STUDENT_LIST_SUCCESS = '[Teacher page] student list load success';
export const CREATE_EXAM = '[Teacher page] create exam';
export const CREATE_EXAM_SUCCESS = '[Teacher page] create exam success';
export const VIEW_EXAMS = '[Teacher page] view exams';
export const VIEW_EXAMS_SUCCESS = '[Teacher page] view exams success';
export const DELETE_EXAM = '[Teacher page] delete exam';
export const DELETE_EXAM_SUCCESS = '[Teacher page] delete exam success';
export const VIEW_PARTICULAR_EXAM = '[Teacher page] view particular exam';
export const VIEW_PARTICULAR_EXAM_SUCCESS = '[Teacher page] view particular exam success';
export const REMOVE_OLD_VIEWVING_EXAM = '[Teacher page] remove old Viewving exam';



export const loadStudentList = createAction(LOAD_STUDENT_LIST)
export const loadStudentListSuccess = createAction(LOAD_STUDENT_LIST_SUCCESS,props <{student:any}>())

export const createExam = createAction(CREATE_EXAM,props <{exam:any}>())
export const createExamSuccess = createAction(CREATE_EXAM_SUCCESS,props <{exam:any}>())

export const viewExams = createAction(VIEW_EXAMS);
export const viewExamsSuccess = createAction(VIEW_EXAMS_SUCCESS,props<{examList:any}>())

export const deleteExam = createAction(DELETE_EXAM,props <{id:string}>());
export const deleteExamSuccess = createAction(DELETE_EXAM_SUCCESS,props<{examsList:any}>())

export const viewParticulaExam = createAction(VIEW_PARTICULAR_EXAM,props<{id:string}>());
export const removerOldViewvingExam = createAction(REMOVE_OLD_VIEWVING_EXAM)
export const viewParticulaExamSuccess = createAction(VIEW_PARTICULAR_EXAM_SUCCESS,props<{viewingExam:any}>())