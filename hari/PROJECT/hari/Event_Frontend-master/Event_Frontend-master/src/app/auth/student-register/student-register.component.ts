import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      this.successMessage = '';
      return;
    }

    const payload = {
      email: this.email,
      password: this.password
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post('http://localhost:8080/api/user/signup', payload, {
      headers,
      responseType: 'text' // Because backend returns a plain string
    }).subscribe({
      next: (response: string) => {
        this.successMessage = response;
        this.errorMessage = '';
        this.clearForm();
      },
      error: (err) => {
  if (err.status === 409) {
    this.errorMessage = 'User already exists.';
  } else {
    this.errorMessage = err.error || 'Registration failed. Please try again.';
  }
  this.successMessage = '';
}

    });
  }

  clearForm() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
