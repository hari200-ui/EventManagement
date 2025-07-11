import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.component.html'
})
export class AdminNotificationComponent {
  userId!: number;
  eventId!: number;
  message: string = '';

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient) {}

  sendToUser() {
    if (this.userId && this.message) {
      this.http.post(`http://localhost:8080/notifications/send/user/${this.userId}`, this.message, {
        responseType: 'text'
      }).subscribe({
        next: response => {
          this.successMessage = response;
          this.errorMessage = '';
          this.clearForm();
        },
        error: err => {
          this.errorMessage = 'Failed to send notification to user.';
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Please enter both User ID and Message.';
    }
  }

  sendToEventUsers() {
    if (this.eventId && this.message) {
      this.http.post(`http://localhost:8080/notifications/send/event/${this.eventId}`, this.message, {
        responseType: 'text'
      }).subscribe({
        next: response => {
          this.successMessage = response;
          this.errorMessage = '';
          this.clearForm();
        },
        error: err => {
          this.errorMessage = 'Failed to send notification to event users.';
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Please enter both Event ID and Message.';
    }
  }

  clearForm() {
    this.userId = 0;
    this.eventId = 0;
    this.message = '';
  }
}
