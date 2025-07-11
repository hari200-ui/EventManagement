import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})


export class MainPageComponent {
  constructor(private router: Router) { }

  goToAdminLogin() {
    this.router.navigate(['/admin-login']);
  }

  goToStudentLogin() {
    this.router.navigate(['/student-login']);
  }
}
