import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { signupStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store
  ) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public navigateToLogin(): void {
    this.router.navigate(['/auth/login'])
  }

  public onSubmit() {
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    const name = 'Tejas Variya';
    const role = 'Teacher'
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(signupStart({ name , email, password , role}))
  }
}
