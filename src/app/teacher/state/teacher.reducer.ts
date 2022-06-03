import { createReducer, on } from "@ngrx/store"
import { initialState } from "src/app/store/shared/shared.state"
import { deleteExamSuccess, loadStudentListSuccess, removerOldViewvingExam, viewExamsSuccess, viewParticulaExamSuccess } from "./teacher.actions"
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
    }),
    on(deleteExamSuccess,(state,action)=>{
        return {
            ...state
        }
    }),
    on(viewParticulaExamSuccess,(state,action:any)=>{
        return {
            ...state,
            viewvingExam : action.questions
        }
    }),
    on(removerOldViewvingExam,(state)=>{
        return {
            ...state,
            viewvingExam:null
        }
    })
    )
export function TeacherReducer(state: any, action: any) {
    return _teacherReducer(state, action);
}