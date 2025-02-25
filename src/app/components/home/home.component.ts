import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FoodsService } from '../../infrastructure/services/foods/foods.service';
import { FoodInterface } from '../../domain/foods/food-interface';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image_url = "https://i.blogs.es/a9fb65/recetas-10-minutos/650_1200.jpg";
  image_url2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Buffet_Germany.jpg/800px-Buffet_Germany.jpg";
  image_url_footer = "https://static.vecteezy.com/system/resources/previews/012/400/996/large_2x/outdoors-tropical-restaurant-with-wooden-tables-chairs-under-palm-trees-cocktails-on-luxury-beach-resort-summer-travel-vacation-closeup-cocktails-ready-to-eat-family-concept-photo.jpg";
  image_url_footer2 = "https://www.gourmet.cl/wp-content/uploads/2016/09/iStock-679300304-1-570x400.jpg";
  foodsMenu: FoodInterface[] = [];

  constructor(private foodsService: FoodsService) {}

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
  //events and animations
}