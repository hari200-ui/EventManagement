import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AdminForgotPasswordComponent } from './auth/admin-forgotpassword/admin-forgotpassword.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { StudentRegisterComponent } from './auth/student-register/student-register.component';
import { StudentForgotPasswordComponent } from './auth/student-forgotpassword/student-forgotpassword.component';

import { MainPageComponent } from './mainpage/mainpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingHistoryComponent } from './admin-booking-history/admin-booking-history.component';

import { CreateEventComponent } from './create-event/create-event.component';
import { DisplayEventComponent } from './display-event/display-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserEventComponent } from './user-event/user-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BookEventComponent } from './book-event/book-event.component';
import { BookingHistoryComponent } from './user-dashboard/booking-history/booking-history.component';

import { EventService } from './event.service';
import { BookingService } from './booking.service';
import { AdminNotificationComponent } from './admin-notification/admin-notification.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';

@NgModule({
  declarations: [
    AppComponent,

    AdminLoginComponent,
    AdminForgotPasswordComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    StudentForgotPasswordComponent,
    AdminNotificationComponent,
    UserNotificationComponent,

    MainPageComponent,
    PageNotFoundComponent,
    LogoutComponent,

    AdminDashboardComponent,
    AdminBookingHistoryComponent,

    CreateEventComponent,
    DisplayEventComponent,
    UpdateEventComponent,
    DeleteEventComponent,

    UserDashboardComponent,
    UserEventComponent,
    EventDetailsComponent,
    BookEventComponent,
    BookingHistoryComponent,
    AdminNotificationComponent,
    UserNotificationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EventService,BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
