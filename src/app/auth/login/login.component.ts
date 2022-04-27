import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myLoginForm!: FormGroup;
  constructor(private router: Router,private fb:FormBuilder) {
    this.myLoginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password :['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  public onLogin(): void {
    console.log('this.myLoginForm.value :>> ', this.myLoginForm.value);
  }

  public redirectToRegister(): void {
    this.router.navigate(['/auth/signup'])
  }
}
