import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../../../infrastructure/services/foods/foods.service';
import { FoodInterface } from '../../../domain/foods/food-interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { FoodFormDialogComponent } from '../food-form-dialog/food-form-dialog.component';
@Component({
  selector: 'app-list-food',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './list-food.component.html',
  styleUrl: './list-food.component.scss'
})
export class ListFoodComponent implements OnInit{
  foods: FoodInterface[] = [];
  constructor(private foodsService: FoodsService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getFoods();
  }
  //services
  getFoods(): void {
    this.foodsService.getFoods().then((foods) => {
      this.foods = foods;
    }).catch((error) => {
      console.error(error);
    });
  }
  addFood(food: FoodInterface): void {
    this.foodsService.createFood(food).then((food) => {
      this.foods.push(food);
    }).catch((error) => {
      console.error(error);
    });
  }
  updateFood(food: FoodInterface): void {
    food.active = !food.active;
    this.foodsService.updateFood(food).then((foodUpdated) => {
      this.updateFoodByIndex(foodUpdated);
    }).catch((error) => {
      console.log(error);
    });
  }
  //animations and events
  openAddFoodDialog(): void {
    const dialogRef = this.dialog.open(FoodFormDialogComponent);
    dialogRef.afterClosed().subscribe((result: FoodInterface) => {
      this.addFood(result);
    });
  };
  updateFoodByIndex(food: FoodInterface): void {
    const index = this.foods.findIndex((f) => f.id === food.id);
    this.foods[index] = food;
  }
}
