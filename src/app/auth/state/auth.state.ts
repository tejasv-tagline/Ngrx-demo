import { User } from "src/app/models/user.model";

export interface Authstate {
    user: User | null
};

export const initialState: Authstate = {
    user: null
};