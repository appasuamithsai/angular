import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CashKickService } from 'src/app/services/cash-kick.service';
import { ContractsService } from 'src/app/services/contracts.service';
import { Contract } from 'src/app/shared/contracts.model';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit, OnDestroy{
  @Input() selected! : boolean;
  selectedContracts = 0;
  totalSelectedAmount = 0.07;
  totalAmount = 0;
  paybackAmount = 0;
  rate = 0;
  payAmount = 0;
  disabled = true;
  contractsSubscription! : Subscription;

  constructor(private contractService : ContractsService, private chashkickService : CashKickService,private router: Router) {}

  ngOnInit() {
    if(this.selected){
      const contracts = this.contractService.getContracts();
      this.updateState(contracts);
    }else{
      this.contractsSubscription = this.contractService.contractsChanged.subscribe(
        (contracts:Contract[]) =>{
          this.updateState(contracts);
        }
      );
    }
  }

  updateState(contracts: Contract[]){
    const selectedContractsList = contracts.filter(contract=>contract.checked);
    this.selectedContracts = selectedContractsList.length;
    if(selectedContractsList.length > 0 ){
      this.disabled = false;
    }else{
      this.disabled = true;
    }

    let selectedAmount = 0;
    let totalRate = 0;
    let selectedPaybackAmount = 0;
    let totalAmount = 0;
    contracts.map(
      contract=>{
        if(contract.checked){
          selectedAmount += contract.paymentAmount;
          selectedPaybackAmount+= contract.perPayment;
          totalRate+=0.12*selectedAmount;
        }
        totalAmount+=contract.paymentAmount;
      }
    );

    this.totalSelectedAmount = selectedAmount;
    this.totalAmount = totalAmount;
    this.paybackAmount = selectedPaybackAmount;
    this.rate = Math.round(totalRate* 100)/100;
    this.payAmount = Math.round((this.rate + this.totalSelectedAmount)* 100)/100;
  }

  onReviewCredit(){
    this.router.navigate(["/selected-contracts"]);
  }

  onSubmitReview(){
    this.chashkickService.emitModalChangeEvent("name-cashkick");
  }
  onReset(){
    let contracts = this.contractService.getContracts();
    contracts = contracts.map(item=>{
      item.checked = false;
      return item;
    })
    this.contractService.resetEvent.emit(contracts);
    this.contractService.updateContracts(contracts);
  }

  ngOnDestroy() {
    // this.contractsSubscription.unsubscribe();
  }  
}
