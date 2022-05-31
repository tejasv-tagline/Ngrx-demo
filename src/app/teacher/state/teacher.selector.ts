import { createFeatureSelector, createSelector } from "@ngrx/store";

export const TEACHER_STATE_NAME = 'teacher';

export const getTeacherState = createFeatureSelector<any>('teacher');

export const getStudents= createSelector(getTeacherState,state=>{
    return state
})

