import { MatTooltip } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import { EventComponent } from './Components/dashboard/event/event.component';
import { HomeComponent } from './Components/dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltip,
    MatTableModule,
    ReactiveFormsModule,

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]

})
export class AppModule { }
