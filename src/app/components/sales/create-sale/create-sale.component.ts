import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../../../infrastructure/services/foods/foods.service';
import { FoodInterface } from '../../../domain/foods/food-interface';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SelectFoodDialogComponent } from '../select-food-dialog/select-food-dialog.component';
import { SaleDetailInterface } from '../../../domain/sale-details/sale-detail-interface';
import { SaleInterface } from '../../../domain/sales/sale-interface';
import { SaleFormDialogComponent } from '../sale-form-dialog/sale-form-dialog.component';
import { SalesService } from '../../../infrastructure/services/sales/sales.service';
import { SaleDetailService } from '../../../infrastructure/services/sale-detail/sale-detail.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-create-sale',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './create-sale.component.html',
  styleUrl: './create-sale.component.scss'
})
export class CreateSaleComponent implements OnInit {
  foodsMenu: FoodInterface[] = [];
  details: SaleDetailInterface[] = [];
  sale: SaleInterface = {client_name: '', nit_ci: ''};
  constructor(private foodsService: FoodsService, private salesService: SalesService, private saleDetailsService: SaleDetailService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getFoodsMenu();
  }
  //services
  getFoodsMenu(): void {
    this.foodsService.getMenu().then((foodsMenu) => {
      this.foodsMenu = foodsMenu;
    }).catch((error) => {
      console.error(error);
    });
  }
  addSale(): void {
    this.salesService.createSale(this.sale).then((newSale) => {
      for (const detail of this.details) {
        detail.sale_id = newSale.id;
      }
      this.addDetails();
    }).catch((error) => {
      console.error(error);
    });
  }
  addDetails(): void {
    for (const detail of this.details) {
      this.saleDetailsService.createSaleDetail(detail).then((newDetail) => {
      }).catch((error) => {
        console.error(error);
      });
    }
    this.resetData();
  }
  //events and animations
  openSaleDetailFoodDialog(): void {
    const dialogRef = this.dialog.open(SaleFormDialogComponent, {
      data: { details: this.details, sale: this.sale }
    });

    dialogRef.afterClosed().subscribe((result: SaleInterface) => {
      if (result) {
        this.sale = result;
        this.calculateSaleTotal();
        this.addSale();
      }
    });
  }
  openFoodSelectionDialog(food: FoodInterface): void {
    const dialogRef = this.dialog.open(SelectFoodDialogComponent, {
      data: food
    });
    dialogRef.afterClosed().subscribe((result: SaleDetailInterface) => {
      if (result) {
        this.addDetailToList(result);
      }
    });
  }
  addDetailToList(detail: SaleDetailInterface): void {
    const existingDetail = this.details.find((d) => d.food_id === detail.food_id);
    if (existingDetail) {
      existingDetail.quantity! += detail.quantity!;
      existingDetail.total! +=  detail.total!;
    } else {
      this.details.push(detail);
    }
  }
  removeDetailFromList(detail: SaleDetailInterface): void {
    const index = this.details.findIndex((d) => d.id === detail.id);
    this.details.splice(index, 1);
  }
  //calculations
  calculateSaleTotal(): void {
    this.sale.total = this.details.reduce((total, detail) => total + detail.total!, 0);
  }
  resetData(): void {
    this.details = [];
    this.sale = {client_name: '', nit_ci: ''};
  }
}
