import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent {
  eventId!: number;
  userId: number = 1;  // You can dynamically get this later from login session
  seats: number = 1;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = +params['id'];
      console.log('📦 Event ID from route:', this.eventId);
    });
  }

  bookEvent() {
  const bookingData = {
    booking_id: 0,      // Backend will ignore or auto-generate
    seats: this.seats,
    user_id: this.userId,
    event_id: this.eventId
  };

  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  this.http.post('http://localhost:8080/bookings/book_event', bookingData, {
    headers: headers,
    responseType: 'text'  // Optional: use 'json' if your backend returns JSON
  }).subscribe({
    next: (response) => {
      console.log('✅ Booking successful:', response);
      alert('Booking successful!');
    },
    error: (error) => {
      console.error('❌ Booking failed:', error);
      console.error('🛑 Status:', error.status);
      console.error('📩 Message:', error.message);
      console.error('📦 Error Body:', error.error);
      alert('Booking failed: ' + (error.error?.message || error.message));
    }
  });
}

}
