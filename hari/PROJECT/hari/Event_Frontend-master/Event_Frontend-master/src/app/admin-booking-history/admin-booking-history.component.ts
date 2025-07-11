import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-booking-history',
  templateUrl: './admin-booking-history.component.html',
  styleUrls: ['./admin-booking-history.component.css']
})
export class AdminBookingHistoryComponent implements OnInit {
  bookings: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8080/bookings/history')
      .subscribe({
        next: (data) => this.bookings = data,
        error: (err) => console.error('Failed to fetch booking history:', err)
      });
  }
}
