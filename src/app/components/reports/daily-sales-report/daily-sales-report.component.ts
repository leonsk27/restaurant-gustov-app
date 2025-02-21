import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SalesService } from '../../../infrastructure/services/sales/sales.service';
import { SaleInterface } from '../../../domain/sales/sale-interface';
import { DailyDetailsReportDialogComponent } from '../daily-details-report-dialog/daily-details-report-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-daily-sales-report',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatNativeDateModule],
  templateUrl: './daily-sales-report.component.html',
  styleUrl: './daily-sales-report.component.scss'
})
export class DailySalesReportComponent {
  displayedColumns: string[] = ['id', 'client_name', 'nit_ci', 'total', 'created_at'];
  sales: SaleInterface[] = [];
  totalSales: number = 0;
  dateForm: FormGroup;
  constructor(private salesService: SalesService, private dialog: MatDialog, private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      date: [new Date()]
    })
   }
  ngOnInit(): void {
    this.getDailySales();
    this.calculateTotalSales();
  }
  //services
  getDailySales(): void {
    const date = this.dateForm.get('date')?.value.toLocaleDateString('en-CA');
    console.log("new date: ", date);
    this.salesService.getSalesReport(date).then((salesReport) => {
      console.log("Daily sales report");
      console.log(salesReport);
      this.sales = salesReport;
      this.calculateTotalSales();
    }).catch((error) => {
      console.error(error);
    });
  }
  //events and animations
  openSaleDetailDialog(sale: SaleInterface): void {
    const dialogRef = this.dialog.open(DailyDetailsReportDialogComponent, {
      data: { sale }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Sale details viewed:', result);
      }
    });
  }
  //calculations
  calculateTotalSales(): void {
    this.totalSales = this.sales.reduce((acc, sale) => acc + Number(sale.total!), 0);
  }
}
