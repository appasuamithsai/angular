import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CashKickService } from 'src/app/services/cash-kick.service';
import { ChipService } from 'src/app/services/chip.service';
import { ContractsService } from 'src/app/services/contracts.service';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-cash-kick-succes-card',
  templateUrl: './cash-kick-succes-card.component.html',
  styleUrls: ['./cash-kick-succes-card.component.css']
})
export class CashKickSuccesCardComponent {
  content = `It will remain on pending state until we review it internally. This can take upto\n 5 mins to couple of hours. Once reviewed, the cash will be transferred to\n your account and you’ll be notified.`;

  constructor(private cashkickService : CashKickService,private chipService:ChipService,private nameService:NameService,private contracts:ContractsService,private router: Router){}

  onCancel(){
    this.cashkickService.emitModalChangeEvent("");
  }
  getDateFromCurrentDate(date:Date): string {
    const arr = date.toString().split(" ");
    const maturity = arr[1]+" "+arr[2]+", "+arr[3];
    return maturity;
  }

  updateCashkick(){
    const cashkicks = this.cashkickService.getCashkicks();
    const amount = this.getTotalRecived();
    const finance = this.getTotalFinanced(amount);
    cashkicks.push(
      {
        name: this.nameService.currentName, 
        status: "pending",
        maturity: this.getDateFromCurrentDate(new Date()),
        totalRecieved:  amount,
        totalFinanced: finance,
    }
    );
    this.cashkickService.updateCashkicks(cashkicks);
  }

  getTotalRecived(): number{
    let selectedAmount = 0;
    let totalRate = 0;
    let selectedPaybackAmount = 0;
    this.contracts.getContracts().map(
      contract=>{
        if(contract.checked){
          selectedAmount += contract.paymentAmount;
          selectedPaybackAmount+= contract.perPayment;
          totalRate+=0.12*selectedAmount;
        }
      }
    );
    return Math.round((totalRate + selectedAmount)* 100)/100;
  }

  getTotalFinanced(amount:number):number{
    return Math.round(((amount * 0.12) + amount)* 100)/100;
  }

  onViewCashKick(){
    this.updateCashkick();
    this.cashkickService.emitModalChangeEvent("");
    this.chipService.emitChipChangeEvent("My Cash Kicks");
    this.router.navigate(["/"]);
  }
}
