import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slgForm : NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;
  constructor(private shoppingListService : ShoppingListService){}
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  ngOnInit() {
     this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index : number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientById(index);
        this.slgForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
     );
  }
  onSubmit(form : NgForm){
    const value = form.value;
    const ingredient = { name:value.name, amount: parseInt(value.amount)};
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,ingredient)
      this.editMode = false;
    }else{
    this.shoppingListService.addIngredient(ingredient);
    // this.shoppingListService.addIngredient({ name:nameInput.value, amount: parseInt(this.amountInputRef.nativeElement.value)});
    // this.addedIngredient.emit({ name:nameInput.value, amount: parseInt(this.amountInputRef.nativeElement.value)});
    }
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slgForm.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredientById(this.editedItemIndex);
    this.onClear();
  }
}
