import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsConfirmRegistrationComponent } from './forms-confirm-registration.component';

describe('FormsConfirmRegistrationComponent', () => {
  let component: FormsConfirmRegistrationComponent;
  let fixture: ComponentFixture<FormsConfirmRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsConfirmRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsConfirmRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
