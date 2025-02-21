import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FoodInterface } from '../../../domain/foods/food-interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-food-form-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatInputModule],
  templateUrl: './food-form-dialog.component.html',
  styleUrl: './food-form-dialog.component.scss'
})
export class FoodFormDialogComponent {
  foodForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FoodFormDialogComponent>
  ) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      description_food: [''],
      price: [0, Validators.required],
      image_url: [''],
      active: [true]
    });
  }
  //events and animations
  onSubmit(): void {
    if (this.foodForm.valid) {
      const newFood: FoodInterface = this.foodForm.value;
      this.dialogRef.close(newFood);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
