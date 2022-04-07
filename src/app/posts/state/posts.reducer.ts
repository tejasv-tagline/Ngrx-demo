import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { addPost, updatePost } from "./posts.actions";
import { initialState, PostsState } from "./posts.state";

export const _postsReducer = createReducer(initialState,
    on(addPost, (state: PostsState, action: any) => {
        let post = {
            ...action.post
        }
        post.id =
            (state.posts.length + 1).toString();

        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state: PostsState, action: any) => {
        console.log('state :>> ', state);
        const updatedPosts = state.posts.map((post: Post) => {
            return action.post.id === post.id ? action.post : post
        })

        return {
            ...state,
            posts: updatedPosts
        }
    }),
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}