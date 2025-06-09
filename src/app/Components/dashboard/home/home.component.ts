import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service'; // adjust path
import { EventItem } from '../event/event.component'; // adjust path

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  pushedEvents: EventItem[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.pushedEvents$.subscribe(events => {
      console.log('HomeComponent received events:', events);
      this.pushedEvents = events;
    });
  }
}
