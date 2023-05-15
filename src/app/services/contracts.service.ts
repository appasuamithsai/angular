import { EventEmitter, Injectable } from '@angular/core';
import { Contract } from '../shared/contracts.model';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  contractsChanged = new EventEmitter<Contract[]>();
  resetEvent = new EventEmitter<Contract[]>();
  private contracts: Contract[] = [
    {
      id: 1,
      name: "Contract1",
      perPayment: 126722.64,
      paymentAmount: 126722.64,
      checked: false
    },
    {
      id: 2,
      name: "Contract2",
      perPayment: 63360,
      paymentAmount: 63360,
      checked: true
    },
    {
      id: 3,
      name: "Contract3",
      perPayment: 36340,
      paymentAmount: 36340,
      checked: false
    },
    {
      id: 4,
      name: "Contract4",
      perPayment: 12690,
      paymentAmount: 12690,
      checked: false
    },
    {
      id: 5,
      name: "Contract5",
      perPayment: 12690,
      paymentAmount: 12690,
      checked: false
    },
    {
      id: 6,
      name: "Contract6",
      perPayment: 12690,
      paymentAmount: 12690,
      checked: true
    },
    {
      id: 7,
      name: "Contract7",
      perPayment: 12690,
      paymentAmount: 12690,
      checked: false
    },
    {
      id: 8,
      name: "Contract8",
      perPayment: 12690,
      paymentAmount: 12690,
      checked: false
    },
  ];
  getContracts() {
    return this.contracts;
  }
  updateContracts(contracts: Contract[]) {
    this.contracts = contracts;
    this.contractsChanged.emit(this.contracts);
  }
}
