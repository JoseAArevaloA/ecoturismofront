import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogginComponent } from './navbar-loggin.component';

describe('NavbarLogginComponent', () => {
  let component: NavbarLogginComponent;
  let fixture: ComponentFixture<NavbarLogginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLogginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
