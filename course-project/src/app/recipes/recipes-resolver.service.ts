import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { DataStorgeService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:"root"})
export class RecipeResolverService implements Resolve<Recipe>{
    constructor(private dataStorage : DataStorgeService, private recipeService: RecipeService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :any {
        const recipes = this.recipeService.getRecipe();
        if(recipes.length === 0){
            return this.dataStorage.fetchRecipes();
        }else{
            return recipes;
        }
    }

}