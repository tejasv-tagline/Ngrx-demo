import { createReducer, on } from "@ngrx/store"
import { initialState } from "src/app/store/shared/shared.state"
import { loadStudentListSuccess } from "./teacher.actions"
import { teacherState } from "./teacher.state"

export const _teacherReducer = createReducer(teacherState,
    on(loadStudentListSuccess,(state:any,action:any)=>{
        return {
            ...state,
            studentList: action.student
        }
    })
    )
export function TeacherReducer(state: any, action: any) {
    return _teacherReducer(state, action);
}