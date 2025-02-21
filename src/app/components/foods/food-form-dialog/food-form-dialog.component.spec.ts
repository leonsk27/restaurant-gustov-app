import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFormDialogComponent } from './food-form-dialog.component';

describe('FoodFormDialogComponent', () => {
  let component: FoodFormDialogComponent;
  let fixture: ComponentFixture<FoodFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodFormDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
