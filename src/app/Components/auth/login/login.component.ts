import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLoginService } from '../services/authlogin.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authloginService: AuthLoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value;

    this.authloginService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        // Navigate or store token if needed
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid credentials!');
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
