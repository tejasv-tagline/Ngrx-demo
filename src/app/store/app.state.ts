import { CounterState } from "../counter/state/counter.state";
import { PostsState } from "../posts/state/posts.state";
import { counterReducer } from "../counter/state/counter.reducer"
import { postsReducer } from "../posts/state/posts.reducer"
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";
import { SharedReducer } from "./shared/shared.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { Authstate } from "../auth/state/auth.state";
import { AuthReducer } from "../auth/state/auth.reducer";

export interface AppState {
    [AUTH_STATE_NAME]: Authstate,
    [SHARED_STATE_NAME]: SharedState

}

export const AppReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer
}