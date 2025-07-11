import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Duplbooking {
  booking_id: number;
  seats: number;
  user_id: number;
  event_id: number;
}

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookings: Duplbooking[] = [];
  userId: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = +storedUserId;
      this.loadBookings(this.userId);
    } else {
      console.error('No userId found in localStorage');
    }
  }

  loadBookings(userId: number): void {
    this.http.get<Duplbooking[]>(`http://localhost:8080/bookings/history?userId=${userId}`)
      .subscribe({
        next: data => {
          this.bookings = data;
        },
        error: err => {
          console.error('Error loading bookings:', err);
        }
      });
  }

  cancelBooking(bookingId: number): void {
    this.http.delete(`http://localhost:8080/bookings/cancel_event?bookid=${bookingId}`)
      .subscribe({
        next: () => {
          // Refresh booking list after cancel
          this.loadBookings(this.userId);
        },
        error: err => {
          console.error('Error cancelling booking:', err);
        }
      });
  }
}
