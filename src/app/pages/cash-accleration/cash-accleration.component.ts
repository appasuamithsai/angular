import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChipService } from 'src/app/services/chip.service';

@Component({
  selector: 'app-cash-accleration',
  templateUrl: './cash-accleration.component.html',
  styleUrls: ['./cash-accleration.component.css']
})
export class CashAcclerationComponent implements OnInit,OnDestroy{
  isContracts = true;

  subscription!: Subscription;

  constructor(private chipService:ChipService) {}

  ngOnInit() {
    this.isContracts = this.chipService.selectedChip === 'My contracts';
    this.subscription = this.chipService.getChipChangeEmitter()
      .subscribe(value => {
          this.isContracts = value === 'My contracts';
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
