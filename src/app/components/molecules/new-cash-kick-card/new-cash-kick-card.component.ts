import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cash-kick-card',
  templateUrl: './new-cash-kick-card.component.html',
  styleUrls: ['./new-cash-kick-card.component.css']
})
export class NewCashKickCardComponent {

  constructor(private router : Router){}

  createNewCashKick(){
    this.router.navigate(["/new-cashkick"]);
  }
}
