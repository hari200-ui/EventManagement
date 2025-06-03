import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Fixed typo
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value);
      // Handle registration logic here
    } else {
      console.log('Form is invalid');
    }
  }

  login() {
    this.router.navigate(['/login']);
  }
}
