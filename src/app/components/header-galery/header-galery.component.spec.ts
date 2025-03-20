import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGaleryComponent } from './header-galery.component';

describe('HeaderGaleryComponent', () => {
  let component: HeaderGaleryComponent;
  let fixture: ComponentFixture<HeaderGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGaleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
