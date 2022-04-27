import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { initialState, PostsState } from "./posts.state";

export const _postsReducer = createReducer(initialState,
    on(addPost, (state: PostsState, action: any) => {
        let post = {
            ...action.post
        }
        post.id =
            (state.posts.length + 1).toString();

        return {
            ...state, // returning all old posts by state
            posts: [...state.posts, post] // returning new added posts with state
        }
    }),
    on(updatePost, (state: PostsState, action: any) => {
        const updatedPosts = state.posts.map((post: Post) => {
            return action.post.id === post.id ? action.post : post
        })

        return {
            ...state, // returning all old posts 
            posts: updatedPosts // returning modified post with state 
        }
    }),
    on(deletePost, (state, { id }) => {
        console.log('state :>> ', state);
        console.log('id sate    :>> ', id);
        const updatedPosts = state.posts.filter((post) => 
            post.id !== id
        )
        console.log('updatedPosts :>> ', updatedPosts);
        return {
            ...state,
            posts :updatedPosts
        }
    })
)

export function postsReducer(state: any, action: any) {
    return _postsReducer(state, action)
}