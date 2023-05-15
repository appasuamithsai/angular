import { Component, Input, OnInit } from '@angular/core';
import { CashKickService } from 'src/app/services/cash-kick.service';

@Component({
  selector: 'app-cash-kick-table',
  templateUrl: './cash-kick-table.component.html',
  styleUrls: ['./cash-kick-table.component.css']
})
export class CashKickTableComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'status', 'maturity','totalRecieved','totalFinanced'];
  dataSource: any = [];
  @Input() width! : string;


  constructor(private caskickService : CashKickService){}

  ngOnInit() {
    this.dataSource = this.caskickService.getCashkicks();     
  }
  
}
