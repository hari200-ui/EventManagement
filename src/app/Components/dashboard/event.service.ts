// event.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventItem } from './event/event.component'; // correct path

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private pushedEvents: EventItem[] = [];
  private pushedEventsSubject = new BehaviorSubject<EventItem[]>([]);
  pushedEvents$ = this.pushedEventsSubject.asObservable();

  constructor() {
  const stored = localStorage.getItem('pushedEvents');
  if (stored) {
    this.pushedEvents = JSON.parse(stored);
    this.pushedEventsSubject.next([...this.pushedEvents]);
  }
}

  pushEvent(event: EventItem) {
    console.log('Pushing event:', event);
    this.pushedEvents.push(event);
    this.pushedEventsSubject.next([...this.pushedEvents]); // use spread to trigger change
  }
}
