import { FoodInterface } from "./food-interface";
export interface FoodRepositoryInterface {
    getFoods(): Promise<FoodInterface[]>;
    getFoodById(id: number): Promise<FoodInterface>;
    createFood(food: FoodInterface): Promise<FoodInterface>;
    updateFood(food: FoodInterface): Promise<FoodInterface>;
    getMenu(): Promise<FoodInterface[]>;
    // deleteFood(id: string): Promise<void>;
}