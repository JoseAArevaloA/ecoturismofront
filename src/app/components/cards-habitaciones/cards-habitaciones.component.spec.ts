import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHabitacionesComponent } from './cards-habitaciones.component';

describe('CardsHabitacionesComponent', () => {
  let component: CardsHabitacionesComponent;
  let fixture: ComponentFixture<CardsHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsHabitacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
