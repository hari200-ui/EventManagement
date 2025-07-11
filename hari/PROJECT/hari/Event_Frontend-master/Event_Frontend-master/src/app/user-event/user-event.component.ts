import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {
  events: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http.get<any[]>('http://localhost:8080/api/admin/events').subscribe({
      next: (data) => {
        // Convert time strings to Date objects
        this.events = data.map(event => ({
          ...event,
          startTime: this.parseTimeToDate(event.startTime),
          endTime: this.parseTimeToDate(event.endTime)
        }));
      },
      error: (err) => console.error('Failed to load events:', err)
    });
  }

  goToDetails(eventId: number): void {
    this.router.navigate(['/user-dashboard/events', eventId]);
  }

  private parseTimeToDate(timeStr: string): Date | undefined {
  if (!timeStr) return undefined;  
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  const date = new Date();
  date.setHours(hours, minutes, seconds || 0);
  return date;
}

}
