import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone 
  ) {}

  onLogin() {
    const payload = { email: this.email, password: this.password };

    this.http.post<{ message: string; userId: number }>(
  'http://localhost:8080/api/user/login',
  payload
).subscribe({
  next: (response) => {
    console.log('Login Response:', response);

    if (response.message.trim().toLowerCase() === 'user login successful') {
      localStorage.setItem('userId', response.userId.toString()); 
      this.ngZone.run(() => {
        this.router.navigate(['/user-dashboard']);
      });
    } else {
      this.errorMessage = response.message || 'Login failed.';
    }
  },
  error: (error) => {
    console.log('Login Error:', error);
    this.errorMessage = error.error || 'Invalid email or password.';
  }
});

  }

  goToRegister() {
    this.router.navigate(['/student-register']);
  }

  goToForgotPassword() {
    this.router.navigate(['/student-forgotpassword']);
  }
}
