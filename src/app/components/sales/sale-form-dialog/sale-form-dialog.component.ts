import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { SaleDetailInterface } from '../../../domain/sale-details/sale-detail-interface';
import { SaleInterface } from '../../../domain/sales/sale-interface';

@Component({
  selector: 'app-sale-form-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    CommonModule
  ],
  templateUrl: './sale-form-dialog.component.html',
  styleUrl: './sale-form-dialog.component.scss'
})
export class SaleFormDialogComponent {
  saleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SaleFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { details: SaleDetailInterface[], sale: SaleInterface }
  ) {
    this.saleForm = this.fb.group({
      client_name: [this.data.sale.client_name, Validators.required],
      nit_ci: [this.data.sale.nit_ci, Validators.required]
    });
  }
// events and animations
  onSubmit(): void {
    if (this.saleForm.valid) {
      this.dialogRef.close(this.saleForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
