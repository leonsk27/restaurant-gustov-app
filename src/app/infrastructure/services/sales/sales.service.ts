import { Injectable } from '@angular/core';
import { SaleRepositoryInterface } from '../../../domain/sales/sale-repository-interface';
import { SaleInterface } from '../../../domain/sales/sale-interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService implements SaleRepositoryInterface {
  private apiUri = 'https://api-rest-gustov-production.up.railway.app/api';
  constructor(private http: HttpClient) { }
  getSalesReport(date: string): Promise<SaleInterface[]> {
    return firstValueFrom(this.http.get<SaleInterface[]>(`${this.apiUri}/sales/report/${date}`));
  }
  createSale(sale: SaleInterface): Promise<SaleInterface> {
    return firstValueFrom(this.http.post<SaleInterface>(`${this.apiUri}/sales`, sale));
  }
}
