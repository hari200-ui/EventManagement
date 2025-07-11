import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-forgotpassword',
  templateUrl: './admin-forgotpassword.component.html',
  styleUrl: './admin-forgotpassword.component.css'
})


export class AdminForgotPasswordComponent {
  email = '';
  newPassword = '';
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) { }

  onResetPassword() {
    const payload = {
      email: this.email,
      newPassword: this.newPassword
    };

    this.http.post('http://localhost:8080/api/admin/forgot-password', payload, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          this.successMessage = res;
          this.errorMessage = '';
          this.email = '';
          this.newPassword = '';
        },
        error: (err) => {
          this.errorMessage = err.error || 'Reset failed';
          this.successMessage = '';
        }
      });
  }
}
