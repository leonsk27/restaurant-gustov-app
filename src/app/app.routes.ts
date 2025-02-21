import { Routes } from '@angular/router';
export const routes: Routes = [
    { path : '', redirectTo: 'home', pathMatch: 'full' },
    { path : 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
    { path: 'foods', loadComponent: () => import('./components/foods/list-food/list-food.component').then(m => m.ListFoodComponent), },
    { path: 'sales', loadComponent: () => import('./components/sales/create-sale/create-sale.component').then(m => m.CreateSaleComponent), },
    { path: 'reports', loadComponent: () => import('./components/reports/daily-sales-report/daily-sales-report.component').then(m => m.DailySalesReportComponent), }
];
