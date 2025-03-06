import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesHotelesComponent } from './slides-hoteles.component';

describe('SlidesHotelesComponent', () => {
  let component: SlidesHotelesComponent;
  let fixture: ComponentFixture<SlidesHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidesHotelesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidesHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
