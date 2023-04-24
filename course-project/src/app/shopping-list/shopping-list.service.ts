
import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',10),
        new Ingredient('Tamatos',5)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredientById(id:number){
        return this.ingredients[id];
    }
    addIngredient(ingredient:{name:string,amount:number}){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredient:{name:string,amount:number}[]){
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index:number , ingredient : Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredientById(index : number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}