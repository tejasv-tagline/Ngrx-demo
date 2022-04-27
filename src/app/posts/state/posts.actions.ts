import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
export const DELETE_POST_ACTION = '[post page] delete post'
export const addPost = createAction('[post page] add post', props<{ post: Post }>());

export const updatePost = createAction('[post page] update post', props<{ post: Post }>())

export const deletePost = createAction(DELETE_POST_ACTION, props<{ id: string }>())