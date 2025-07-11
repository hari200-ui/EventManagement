import { Component } from '@angular/core';
import { EventService, EventModel } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  event: EventModel = {
    title: '',
    date: '',
    location: '',
    category: '',
    availableSeats: 0,
    description: '',
    startTime: '',
    endTime: '',
    image: '',
    imageUrl: ''

  };

  message = '';
  imagePreview: string | null = null;

  constructor(private eventService: EventService) {}
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.event.image = reader.result as string;  // Base64 string
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    const eventData: EventModel = {
  title: this.event.title,
  date: this.event.date,
  location: this.event.location,
  category: this.event.category,
  availableSeats: this.event.availableSeats,
  description: this.event.description,
  startTime: this.event.startTime, // ✅ Add this
  endTime: this.event.endTime,     // ✅ Add this
  image: this.event.image,
  imageUrl: ''
};

    this.eventService.createEvent(eventData).subscribe({
      next: () => {
        this.message = 'Event created successfully!';
        this.event = {
          title: '',
          date: '',
          location: '',
          category: '',
          availableSeats: 0,
          description: '',
          image: '',
          startTime:'',
          endTime:'',
          imageUrl: ''
        };
        this.imagePreview = null;
      },
      error: (err) => {
        console.error('Error:', err);
        this.message = 'Error creating event.';
      }
    });
  }
}
