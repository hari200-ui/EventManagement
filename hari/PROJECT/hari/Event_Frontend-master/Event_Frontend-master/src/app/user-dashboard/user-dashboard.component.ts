import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']  // ✅ Fix: styleUrls not styleUrl
})
export class UserDashboardComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Clear session or token storage
    localStorage.clear(); // or sessionStorage.clear();

    // Navigate to home or login page
    this.router.navigate(['/']);
  }
}
