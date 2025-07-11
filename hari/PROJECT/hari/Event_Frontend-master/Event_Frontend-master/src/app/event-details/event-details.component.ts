import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventId: string | null = null;
  event: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');
    console.log('Event ID from route:', this.eventId);

    if (this.eventId) {
      this.http.get(`http://localhost:8080/api/admin/events/${this.eventId}`).subscribe({
        next: (data: any) => {
          console.log('Fetched Event:', data);

          // Parse time strings to Date objects for display formatting
          if (data.startTime) data.startTime = this.parseTimeToDate(data.startTime);
          if (data.endTime) data.endTime = this.parseTimeToDate(data.endTime);

          this.event = data;
        },
        error: (err) => console.error('Error fetching event:', err)
      });
    }
  }

  bookSeats(): void {
    if (this.eventId) {
      this.router.navigate(['/user-dashboard/book-event', this.eventId]);
    }
  }

  private parseTimeToDate(timeStr: string): Date | undefined {
    if (!timeStr) return undefined;
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, seconds || 0);
    return date;
  }
}
