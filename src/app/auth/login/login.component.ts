import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myLoginForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private store: Store<AppState>) {
    this.myLoginForm = this.fb.group({
      email: ['tejasv.tagline@gmail.com', [Validators.required]],
      password: ['123456', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public onLogin(): void {
    const email = this.myLoginForm.value.email;
    const password = this.myLoginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(loginStart({ email, password }));

  }

  public redirectToRegister(): void {
    this.router.navigate(['/auth/signup'])
  }
}
