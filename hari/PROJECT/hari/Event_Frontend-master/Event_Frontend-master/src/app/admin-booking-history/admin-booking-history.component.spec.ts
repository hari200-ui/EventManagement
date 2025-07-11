import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBookingHistoryComponent } from './admin-booking-history.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdminBookingHistoryComponent', () => {
  let component: AdminBookingHistoryComponent;
  let fixture: ComponentFixture<AdminBookingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBookingHistoryComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA], // Ignore unknown elements like router-outlet, etc.
    }).compileComponents();

    fixture = TestBed.createComponent(AdminBookingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
