import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingDetailComponent } from './hosting-detail.component';

describe('HostingDetailComponent', () => {
  let component: HostingDetailComponent;
  let fixture: ComponentFixture<HostingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostingDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
