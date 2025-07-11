import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html'
})
export class UserNotificationComponent implements OnInit {
  notifications: any[] = [];
  userId = localStorage.getItem('userId');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
    this.http.get<any[]>(`http://localhost:8080/notifications/user/${this.userId}`)
      .subscribe(data => this.notifications = data);
  }

  markAsRead(id: number) {
    this.http.post(`http://localhost:8080/notifications/${id}/read`, null)
      .subscribe(() => this.loadNotifications());
  }
}
