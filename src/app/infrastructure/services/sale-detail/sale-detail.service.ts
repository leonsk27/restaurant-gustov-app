import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SaleDetailInterface } from '../../../domain/sale-details/sale-detail-interface';
@Injectable({
  providedIn: 'root'
})
export class SaleDetailService {
  private apiUri = 'https://api-rest-gustov-production.up.railway.app/api';
  constructor(private http: HttpClient) { }
  createSaleDetail(saleDetail: SaleDetailInterface): Promise<SaleDetailInterface> {
    return firstValueFrom(this.http.post<SaleDetailInterface>(`${this.apiUri}/sale-details`, saleDetail));
  }
  getSaleDetails(sale_id: number): Promise<SaleDetailInterface[]> {
    return firstValueFrom(this.http.get<SaleDetailInterface[]>(`${this.apiUri}/sale-details/${sale_id}`));
  }
}
