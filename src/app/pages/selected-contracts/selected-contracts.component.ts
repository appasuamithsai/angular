import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CashKickService } from 'src/app/services/cash-kick.service';

@Component({
  selector: 'app-selected-contracts',
  templateUrl: './selected-contracts.component.html',
  styleUrls: ['./selected-contracts.component.css']
})
export class SelectedContractsComponent  implements OnInit{
  modal = "";
  constructor(private cashkickService: CashKickService ,private router: Router){}
  
  ngOnInit() {
    this.cashkickService.getModalChangeEmitter().subscribe(
      value=>{
        this.modal = value;
      }
    );
  }
  
  onBackPressed(){
    this.router.navigate(['/']);
  }


}
