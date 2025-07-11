
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EventModel {
  title: string;
  date: string;
  location: string;
  category: string;  
  availableSeats: number;     
  description: string;
  startTime: string;
  endTime: string;
  image: String | null;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/admin/events';

  constructor(private http: HttpClient) {}

  createEvent(event: EventModel): Observable<any> {
    return this.http.post(`${this.apiUrl}`, event);
  }

  getAllEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.apiUrl}`);
  }
}
  