import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FoodInterface } from '../../../domain/foods/food-interface';
@Component({
  selector: 'app-select-food-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './select-food-dialog.component.html',
  styleUrl: './select-food-dialog.component.scss'
})
export class SelectFoodDialogComponent {
  foodForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SelectFoodDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FoodInterface
  ) {
    this.foodForm = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }
// events and animations
  onSubmit(): void {
    if (this.foodForm.valid) {
      const quantity = this.foodForm.get('quantity')?.value;
      const saleDetail = {
        food_id: this.data.id,
        food_name: this.data.name,
        quantity: quantity,
        total: quantity * this.data.price!,

      }
      this.dialogRef.close(saleDetail);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
