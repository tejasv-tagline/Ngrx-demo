import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  public myForm!: FormGroup;
  public post$!: Observable<Post>;
  public post!: Post;
  public postSubscription!: Subscription;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private store: Store) {
    this.myForm = this.fb.group({
      title: '',
      description: ''
    })
  }

  ngOnInit(): void {
    let id: string = '';
    this.activatedRoute.paramMap.subscribe((params: any) => {
      id = (params.params.id).toString();
      this.postSubscription = this.store?.select(getPostById, { id }).subscribe(res => {
        this.post = res;
        this.createForm();
      })
    })
  }

  public onUpdate() {
    const post: Post = {
      id: this.post.id,
      title: this.myForm.value.title,
      description: this.myForm.value.description
    }
    this.store.dispatch(updatePost({ post }))
  }

  public createForm(): void {
    this.myForm = this.fb.group({
      title: this.post.title,
      description: this.post.description
    })
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
