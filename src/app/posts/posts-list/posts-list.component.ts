import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  public posts$!: Observable<Post[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)
  }

  public deletePost(id: any ): void {
    if (confirm("Are you sure want to delete ?")) {
      this.store.dispatch(deletePost({id}))
    }
  }
}
