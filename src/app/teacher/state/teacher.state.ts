import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TEACHER_STATE_NAME } from "./teacher.selector";

export const teacherState = {
};

const getTeacherState = createFeatureSelector<any>(TEACHER_STATE_NAME);

export const isAuthenticated = createSelector(getTeacherState, (state) => {
    console.log("Teacher",state)
    return true;
})
