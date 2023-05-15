import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({providedIn:'root'})
export class DataStorgeService {
    constructor(private http : HttpClient, private recipeService: RecipeService){}


    storeRecipes(){
        const recipes = this.recipeService.getRecipe();
        this.http.put("https://courseproject-fc66b-default-rtdb.firebaseio.com/recipes.json",recipes)
        .subscribe(res=>{
            console.log(res);
        });
    }


    fetchRecipes(){
        return this.http.get<Recipe[]>("https://courseproject-fc66b-default-rtdb.firebaseio.com/recipes.json")
        .pipe(
            map(
                recipes =>{
                    return recipes.map(recipe=>{
                        return {...recipe,ingredients: recipe.ingredients?recipe.ingredients:[]}
                    });
                }
            ),
            tap(recipes=>{
                 this.recipeService.setRecipes(recipes);
            })
        );
        
    }
}