import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { postsReducer } from "./state/posts.reducer";

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
            {
                path: 'add',
                component: AddPostComponent
            },
            {
                path: 'edit/:id',
                component: EditPostComponent
            }
        ]
    },

]

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('posts',postsReducer),
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ],
    providers: [],
})
export class PostsModule { }
