import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";
import { PostsState } from "./posts.state";

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, state => {
    return state.posts
})

export const getPostById = createSelector(getPostsState, (state: any, props: { id: string }) => {
    return state.posts.find((post:Post) => post.id === props.id)
})