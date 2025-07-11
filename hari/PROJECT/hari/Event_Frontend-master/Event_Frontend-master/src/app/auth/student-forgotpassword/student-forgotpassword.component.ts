import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-forgotpassword',
  templateUrl: './student-forgotpassword.component.html',
  styleUrls: ['./student-forgotpassword.component.css']
})
export class StudentForgotPasswordComponent {
  email = '';
  newPassword = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  onResetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      this.successMessage = '';
      return;
    }

    const payload = {
      email: this.email,
      newPassword: this.newPassword
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('http://localhost:8080/api/user/forgot-password', payload, {
      headers,
      responseType: 'text' // Expecting plain string from backend
    }).subscribe({
      next: (response: string) => {
        this.successMessage = response;
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Failed to reset password. Please try again.';
        this.successMessage = '';
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/student-login']);
  }
}
