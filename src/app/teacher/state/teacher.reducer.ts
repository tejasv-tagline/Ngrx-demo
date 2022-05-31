import { createReducer, on } from "@ngrx/store"
import { initialState } from "src/app/store/shared/shared.state"
import { loadStudentListSuccess, viewExamsSuccess } from "./teacher.actions"
import { teacherState } from "./teacher.state"

export const _teacherReducer = createReducer(teacherState,
    on(loadStudentListSuccess,(state:any,action:any)=>{
        return {
            ...state,
            studentList: action.student
        }
    }),
    on(viewExamsSuccess, (state:any,action:any)=>{
        return {
            ...state,
            examList : action.examList
        }
    })
    )
export function TeacherReducer(state: any, action: any) {
    return _teacherReducer(state, action);
}