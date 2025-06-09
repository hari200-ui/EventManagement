import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { EventService } from '../event.service';

export interface EventItem {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  seatCapacity: number;
  image: string;
  about: string;
}


@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'time', 'location', 'seatCapacity', 'image', 'about', 'actions'];
  dataSource: EventItem[] = [];

  @ViewChild(MatTable) table!: MatTable<EventItem>;

  eventForm!: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder, private eventService: EventService) {}

  ngOnInit() {
   this.eventForm = this.fb.group({
  name: ['', Validators.required],
  date: ['', Validators.required],
  time: ['', Validators.required],
  location: ['', Validators.required],
  seatCapacity: [0, [Validators.required, Validators.min(1)]],
  about: ['']
});

  }

  imagePreview: string | ArrayBuffer | null = null;
selectedImageFile: File | null = null;

onImageSelected(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file && file.type.startsWith('image/')) {
    this.selectedImageFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

addOrUpdateEvent() {
  if (this.eventForm.invalid) return;

  const formValue = this.eventForm.value;

  const eventWithImage = {
    ...formValue,
    image: this.imagePreview || ''
  };

  if (this.editingIndex !== null) {
    const updatedEvent = {
      ...this.dataSource[this.editingIndex],
      ...eventWithImage
    };
    this.dataSource[this.editingIndex] = updatedEvent;
    this.editingIndex = null;
  } else {
    const nextId = this.dataSource.length > 0 ? Math.max(...this.dataSource.map(e => e.id)) + 1 : 1;
    const newEvent: EventItem = {
      id: nextId,
      ...eventWithImage
    };
    this.dataSource.push(newEvent);
  }

  this.eventForm.reset();
  this.imagePreview = null;
  this.selectedImageFile = null;
  this.table.renderRows();
}


  editEvent(index: number) {
  this.editingIndex = index;
  const event = this.dataSource[index];
  this.eventForm.patchValue(event);
  this.imagePreview = event.image;
}

  deleteEvent(index: number) {
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  cancelEdit() {
  this.editingIndex = null;
  this.eventForm.reset();
  this.imagePreview = null;
  this.selectedImageFile = null;
}

  pushEvent(event: EventItem) {
  this.eventService.pushEvent(event);
  alert(`Event "${event.name}" has been pushed to the home page!`);
  console.log('EventComponent pushing:', event);
}
}
