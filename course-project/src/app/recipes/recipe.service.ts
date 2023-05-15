import {  Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    constructor(private slService : ShoppingListService){}
    private recipes : Recipe[] = [];
    // [
    //     new Recipe("Test",
    //     "This is a test",
    //     "https://i.ndtvimg.com/i/2015-10/dosa_625x350_51444723752.jpg"
    //     ,[new Ingredient("Onion",21),new Ingredient("Tamato",40)]),
    //     new Recipe("Another Test",
    //     "This is a test",
    //     "https://i.ndtvimg.com/i/2015-10/dosa_625x350_51444723752.jpg",
    //     [new Ingredient("Dosa",21),new Ingredient("Mirchi",40)])
    //   ];

    getRecipe(){
        return this.recipes.slice();
    }

    getRecipeById(id : number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(id:number,recipe : Recipe){
        this.recipes[id] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(id:number){
        this.recipes.splice(id,1)
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
}