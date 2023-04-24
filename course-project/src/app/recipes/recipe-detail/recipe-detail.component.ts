import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  id : number; 
  constructor(private route : ActivatedRoute,private recpieService : RecipeService,private router:Router){}
  
  ngOnInit() {
    // const id = +this.route.snapshot.params['id'];
    // this.recipe = this.recpieService.getRecipeById(id);
    // console.log(this.recipe);
    this.route.params.subscribe(
        (param : Params)=>{
          this.id = +param['id'];
          this.recipe = this.recpieService.getRecipeById(this.id);
        }
    );
  }
  onAddToShoppingList(){
    this.recpieService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    // this.router.navigate(["edit"],{relativeTo:this.route});
    this.router.navigate(["../",this.id,"edit"],{relativeTo:this.route});
  }
  deleteRecipe(){
    this.recpieService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);
  }
}
