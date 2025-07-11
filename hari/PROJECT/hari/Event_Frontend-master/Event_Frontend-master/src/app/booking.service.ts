import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8080/bookings';

  constructor(private http: HttpClient) {}

  bookEvent(payload: any) {
    return this.http.post(`${this.baseUrl}/book_event`, payload);
  }

  cancelEvent(bookingId: number) {
    return this.http.delete(`${this.baseUrl}/cancel_event?bookid=${bookingId}`);
  }

  getBookingsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/history?userId=${userId}`);
  }
}
