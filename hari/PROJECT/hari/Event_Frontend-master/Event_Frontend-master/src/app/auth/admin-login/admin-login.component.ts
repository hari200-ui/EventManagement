import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  showForgotPassword = false;
  newPassword = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    const payload = { email: this.email, password: this.password };

    this.http.post('http://localhost:8080/api/admin/login', payload, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          alert(response);
          this.router.navigate(['/admin-dashboard']);
        },
        error: () => {
          this.errorMessage = 'Invalid email or password.';
        }
      });
  }

  onForgotPassword() {
    const payload = {
      email: this.email,
      newPassword: this.newPassword
    };

    this.http.post('http://localhost:8080/admin/forgot-password', payload, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          this.successMessage = response;
          this.errorMessage = '';
          this.showForgotPassword = false;
        },
        error: () => {
          this.errorMessage = 'Failed to reset password.';
        }
      });
  }
}
