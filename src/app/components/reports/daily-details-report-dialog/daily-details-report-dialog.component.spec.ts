import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDetailsReportDialogComponent } from './daily-details-report-dialog.component';

describe('DailyDetailsReportDialogComponent', () => {
  let component: DailyDetailsReportDialogComponent;
  let fixture: ComponentFixture<DailyDetailsReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyDetailsReportDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyDetailsReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
