import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListComponent]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[] = [];
  isSub : Subscription;
  constructor(private shoppingListService : ShoppingListService){}
  ngOnDestroy(): void {
    this.isSub.unsubscribe();
  }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.isSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = this.shoppingListService.getIngredients();
      }
    );
  }
  // onIngredientCreated(ingredient : Ingredient){
  //   this.shoppingListService.addIngredients(ingredient);
  //   // this.ingredients.push(ingredient);
  // }
  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }

}
