import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const addPost = createAction('[post page] add post', props<{ post: Post }>());

export const updatePost = createAction('[post page] update post', props<{ post: Post }>())