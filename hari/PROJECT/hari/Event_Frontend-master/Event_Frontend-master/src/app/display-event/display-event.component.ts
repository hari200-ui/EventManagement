import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
  events: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http.get<any[]>('http://localhost:8080/api/admin/events').subscribe({
      next: (data) => this.events = data,
      error: (err) => console.error('Failed to load events:', err)
    });
  }

  editEvent(eventId: number): void {
    this.router.navigate(['/update-event', eventId]);
  }

  deleteEvent(id: number): void {
    if (!confirm('Are you sure you want to delete this event?')) return;

    this.http.delete(`http://localhost:8080/api/admin/events/${id}`).subscribe({
      next: () => {
        alert('Event deleted successfully');
        this.loadEvents();
      },
      error: (err) => console.error('Error deleting event:', err)
    });
  }
}
