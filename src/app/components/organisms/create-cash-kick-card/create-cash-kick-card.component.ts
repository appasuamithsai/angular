import { Component, EventEmitter, OnInit } from '@angular/core';
import { CashKickService } from 'src/app/services/cash-kick.service';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-create-cash-kick-card',
  templateUrl: './create-cash-kick-card.component.html',
  styleUrls: ['./create-cash-kick-card.component.css']
})
export class CreateCashKickCardComponent implements OnInit{
  disabled = true;
  
  constructor(private cashkickService : CashKickService,private nameService: NameService) {}
  
  ngOnInit() {
    this.nameService.getNameChangeEmitter().subscribe(value=>{
      this.disabled = !(value.length>1)
    });
  }
  
  onCreateCashkick() {
    this.cashkickService.emitModalChangeEvent("success");
  }

  onCancelCreateCashkick() {
    this.cashkickService.emitModalChangeEvent("");
  }
}
