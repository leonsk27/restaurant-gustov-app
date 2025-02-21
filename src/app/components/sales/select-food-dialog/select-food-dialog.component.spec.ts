import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFoodDialogComponent } from './select-food-dialog.component';

describe('SelectFoodDialogComponent', () => {
  let component: SelectFoodDialogComponent;
  let fixture: ComponentFixture<SelectFoodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFoodDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFoodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
