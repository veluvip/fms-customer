import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmsDashboardPageComponent } from './fms-dashboard-page.component';

describe('FmsDashboardPageComponent', () => {
  let component: FmsDashboardPageComponent;
  let fixture: ComponentFixture<FmsDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmsDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmsDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
