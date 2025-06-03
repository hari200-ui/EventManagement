import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup
  hide = true;



  constructor(private fb:FormBuilder, private router:Router) {
  this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    }

    login(){
      console.log(this.loginForm.valid)
    }

    register(){
      this.router.navigate(["/register"])

    }

}
