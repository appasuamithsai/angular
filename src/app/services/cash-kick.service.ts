import { EventEmitter, Injectable } from '@angular/core';
import { Cashkick } from '../shared/cashkick.model';

@Injectable({
  providedIn: 'root'
})
export class CashKickService {

  modalChange: EventEmitter<string> = new EventEmitter();
  cashkickChanged = new EventEmitter<Cashkick[]>();
  
  private  cashkicks: Cashkick[] = [
    {
      name: 'My first advance', 
      status: "pending",
      maturity: "Apr 03, 2022",
      totalRecieved:  150000.00,
      totalFinanced: 170454.55,
    },
    {
      name: 'My Second advance', 
      status: "pending", 
      maturity:"Apr 03, 2022",
      totalRecieved: 150000.00,
      totalFinanced: 170454.55
    },
  ];
  constructor() {}

  emitModalChangeEvent(value:string) {
    this.modalChange.emit(value);
  }

  getModalChangeEmitter() {
    return this.modalChange;
  }

  getCashkicks() {
    return this.cashkicks;
  }


  updateCashkicks(contracts: Cashkick[]) {
    this.cashkicks = contracts;
    this.cashkickChanged.emit(this.cashkicks);
  }
}
