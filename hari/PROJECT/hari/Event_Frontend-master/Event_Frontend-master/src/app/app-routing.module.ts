// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AdminForgotPasswordComponent } from './auth/admin-forgotpassword/admin-forgotpassword.component';
import { StudentLoginComponent } from './auth/student-login/student-login.component';
import { StudentRegisterComponent } from './auth/student-register/student-register.component';
import { StudentForgotPasswordComponent } from './auth/student-forgotpassword/student-forgotpassword.component';

import { MainPageComponent } from './mainpage/mainpage.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CreateEventComponent } from './create-event/create-event.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DisplayEventComponent } from './display-event/display-event.component';
import { UserEventComponent } from './user-event/user-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BookEventComponent } from './book-event/book-event.component';
import { BookingHistoryComponent } from './user-dashboard/booking-history/booking-history.component';
import { AdminBookingHistoryComponent } from './admin-booking-history/admin-booking-history.component';
import { AdminNotificationComponent } from './admin-notification/admin-notification.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';

const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },

  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-forgotpassword', component: AdminForgotPasswordComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'student-forgotpassword', component: StudentForgotPasswordComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-bookings', component: AdminBookingHistoryComponent },
  { path: 'admin/notifications', component: AdminNotificationComponent },

  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    children: [
      { path: 'events', component: UserEventComponent },
      { path: 'events/:id', component: EventDetailsComponent },
      { path: 'book-event/:id', component: BookEventComponent },
      { path: 'bookings', component: BookingHistoryComponent },
      { path: 'notifications', component: UserNotificationComponent },
      { path: '', redirectTo: 'events', pathMatch: 'full' }
    ]
  },

  { path: 'create-event', component: CreateEventComponent },
  { path: 'display-event', component: DisplayEventComponent },
  { path: 'update-event/:id', component: UpdateEventComponent },
  { path: 'delete-event', component: DeleteEventComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
