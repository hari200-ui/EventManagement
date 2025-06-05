import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

export interface EventItem {
  id: number;
  name: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'location', 'actions'];
  dataSource: EventItem[] = [];

  @ViewChild(MatTable) table!: MatTable<EventItem>;

  eventForm!: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  addOrUpdateEvent() {
    if (this.eventForm.invalid) return;

    if (this.editingIndex !== null) {
      const updatedEvent = {
        ...this.dataSource[this.editingIndex],
        ...this.eventForm.value
      };
      this.dataSource[this.editingIndex] = updatedEvent;
      this.editingIndex = null;
    } else {
      const nextId = this.dataSource.length > 0 ? Math.max(...this.dataSource.map(e => e.id)) + 1 : 1;
      const newEvent: EventItem = {
        id: nextId,
        ...this.eventForm.value
      };
      this.dataSource.push(newEvent);
    }

    this.eventForm.reset();
    this.table.renderRows();
  }

  editEvent(index: number) {
    this.editingIndex = index;
    this.eventForm.patchValue(this.dataSource[index]);
  }

  deleteEvent(index: number) {
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  cancelEdit() {
    this.editingIndex = null;
    this.eventForm.reset();
  }
}
