import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorgeService } from "../shared/data-storage.service";

@Component({
    selector : 'app-header',
    templateUrl : "./header.component.html"
})
export class HeaderComponent{
    constructor(private dataService : DataStorgeService){}
    saveData(){
        this.dataService.storeRecipes();
    }

    fetchData(){
        this.dataService.fetchRecipes().subscribe();
    }
}