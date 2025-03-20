import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostinglistComponent } from './hostinglist.component';

describe('HostinglistComponent', () => {
  let component: HostinglistComponent;
  let fixture: ComponentFixture<HostinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostinglistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
