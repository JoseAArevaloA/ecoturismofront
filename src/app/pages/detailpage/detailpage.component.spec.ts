import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpageComponent } from './detailpage.component';

describe('DetailpageComponent', () => {
  let component: DetailpageComponent;
  let fixture: ComponentFixture<DetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
