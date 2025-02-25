import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaleInterface } from '../../../domain/sales/sale-interface';
import { SaleDetailInterface } from '../../../domain/sale-details/sale-detail-interface';
import { SaleDetailService } from '../../../infrastructure/services/sale-detail/sale-detail.service';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { FoodsService } from '../../../infrastructure/services/foods/foods.service';
@Component({
  selector: 'app-daily-details-report-dialog',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './daily-details-report-dialog.component.html',
  styleUrl: './daily-details-report-dialog.component.scss'
})
export class DailyDetailsReportDialogComponent {
  saleDetails: SaleDetailInterface[] = [];

  constructor(
    private saleDetailService: SaleDetailService,
    private dialogRef: MatDialogRef<DailyDetailsReportDialogComponent>,
    private foodsService: FoodsService,
    @Inject(MAT_DIALOG_DATA) public data: { sale: SaleInterface }
  ) { }
  ngOnInit(): void {
    this.getSaleDetails();
  }
  //services
  getSaleDetails(): void {
    this.saleDetailService.getSaleDetails(this.data.sale.id!).then((details) => {
      this.saleDetails = details;
      this.assignFoodNames();
    }).catch((error) => {
      console.error(error);
    });
  }
  assignFoodNames(): void {
    this.saleDetails.forEach((detail) => {
      this.foodsService.getFoodById(detail.food_id!).then((food) => {
        detail.food_name = food.name;
      }).catch((error) => {
        console.error(error);
    })});
  }
  //events and animations
  onClose(): void {
    this.dialogRef.close();
  }
}
