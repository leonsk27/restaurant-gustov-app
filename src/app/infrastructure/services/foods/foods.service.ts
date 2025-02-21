import { Injectable } from '@angular/core';
import { FoodInterface } from '../../../domain/foods/food-interface';
import { FoodRepositoryInterface } from '../../../domain/foods/food-repository-interface';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodsService implements FoodRepositoryInterface {
  private apiUri = 'https://api-rest-gustov-production.up.railway.app/api';
  constructor(private http: HttpClient) { }
  getFoods(): Promise<FoodInterface[]> {
    return firstValueFrom(this.http.get<FoodInterface[]>(`${this.apiUri}/foods`));
  }
  createFood(food: FoodInterface): Promise<FoodInterface> {
    return firstValueFrom(this.http.post<FoodInterface>(`${this.apiUri}/foods`, food));
  }
  updateFood(food: FoodInterface): Promise<FoodInterface> {
    return firstValueFrom(this.http.patch<FoodInterface>(`${this.apiUri}/foods/${food.id}`, food));
  }
  getMenu(): Promise<FoodInterface[]> {
    return firstValueFrom(this.http.get<FoodInterface[]>(`${this.apiUri}/foods/menu`)); 
  }
  getFoodById(id: number): Promise<FoodInterface> {
    return firstValueFrom(this.http.get<FoodInterface>(`${this.apiUri}/foods/${id}`));
  }
} 
