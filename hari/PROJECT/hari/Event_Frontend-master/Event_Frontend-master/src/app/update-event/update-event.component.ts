import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  eventId!: number;
  eventData: any = {};
  base64Image: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadEventData();
  }

  loadEventData(): void {
    this.http.get<any>(`http://localhost:8080/api/admin/events/${this.eventId}`).subscribe({
      next: (data) => this.eventData = data,
      error: (err) => console.error('Error loading event:', err)
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  updateEvent(): void {
    if (this.base64Image) {
      this.eventData.image = this.base64Image;
    }

    this.http.put(`http://localhost:8080/api/admin/events/${this.eventId}`, this.eventData).subscribe({
      next: () => {
        alert('Event updated successfully');
        this.router.navigate(['/admin-dashboard/display-event']);
      },
      error: (err) => console.error('Error updating event:', err)
    });
  }
}
