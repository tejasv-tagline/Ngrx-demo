import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { addPost } from "./posts.actions";
import { initialState } from "./posts.state";

export const _postsReducer = createReducer(initialState,
    on(addPost, (state: any, action: any) => {
        let post = {
            ...action.post
        }
        post.id =
            (state.posts.length + 1).toString();

        return {
            ...state,
            posts: [...state.posts, post]
        }
    })
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}