import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentForgotpasswordComponent } from './student-forgotpassword.component';

describe('StudentForgotpasswordComponent', () => {
  let component: StudentForgotpasswordComponent;
  let fixture: ComponentFixture<StudentForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentForgotpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
