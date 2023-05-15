import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cash-kick',
  templateUrl: './new-cash-kick.component.html',
  styleUrls: ['./new-cash-kick.component.css']
})
export class NewCashKickComponent {

  constructor(private router: Router){}
  
  onBackPressed(){
    this.router.navigate(['/']);
  }
}
