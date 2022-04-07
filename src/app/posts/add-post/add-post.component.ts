import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {
    this.myForm = this.fb.group({
      title: '',
      description: ''
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.store.dispatch(addPost({ post: this.myForm.value }))
  }
}
