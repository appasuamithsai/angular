import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { ContractsService } from 'src/app/services/contracts.service';
import { Contract } from 'src/app/shared/contracts.model';

export interface Term {
  months: string;
  percent: string;
}
export interface IContract {
  id: number;
  name: string;
  type: string;
  perPayment: number;
  termLength: Term;
  paymentAmount: number;
  checked:boolean
}




@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.css']
})
export class ContractsTableComponent implements OnInit {
  ELEMENT_DATA! : IContract[];
  @Input() width!: string;
  @Input() checkbox!: boolean;
  @Input() selected! : boolean;

  displayedColumns: string[] = ['name', 'type', 'perPayment', 'termLength', 'paymentAmount'];
  dataSource = new MatTableDataSource<IContract>(this.ELEMENT_DATA);
  selection = new SelectionModel<IContract>(true, []);
  currentRowID: number[] = [0];

  constructor(private contractService: ContractsService) { }

  ngOnInit(): void {
    if (this.checkbox) {
      this.displayedColumns.unshift('select');
    }
    this.contractService.resetEvent.subscribe(
      contracts=>{
        this.ELEMENT_DATA = contracts.map(
          contract => {
            return {
              ...contract, type: "Monthly", termLength: {
                months: "12 months",
                percent: "12.0% fee"
              },
            }
          }
        );
        this.currentRowID = [0];
        this.dataSource = new MatTableDataSource<IContract>(this.ELEMENT_DATA);
        this.selection = new SelectionModel<IContract>(true, []);
      }
    );
    
    this.ELEMENT_DATA = this.contractService.getContracts().map(
      contract => {
        return {
          ...contract, type: "Monthly", termLength: {
            months: "12 months",
            percent: "12.0% fee"
          },
        }
      }
    );

    if(this.selected){
      this.ELEMENT_DATA = this.ELEMENT_DATA.filter(contract=>contract.checked);
    }
    this.dataSource = new MatTableDataSource<IContract>(this.ELEMENT_DATA);
    this.selection = new SelectionModel<IContract>(true, []);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.currentRowID = [0];
      this.selection.clear();
      this.updateStateOfContracts();
      return;
    }
    this.ELEMENT_DATA.map(element => this.currentRowID.push(element.id));
    this.selection.select(...this.dataSource.data);
    this.updateStateOfContracts();
  }

  getRowClass(rowId:number){
    return 'row-'+rowId;
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IContract): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  updateStateOfContracts(){
      const selectedContracts : any = this.ELEMENT_DATA.map((contract:IContract)=>{
        return {
          id: contract.id,
          name: contract.name,
          perPayment: contract.perPayment,
          paymentAmount: contract.paymentAmount,
          checked: this.currentRowID.includes(contract.id),
        };        
    });
    this.contractService.updateContracts(selectedContracts);
  }

  onSelectContract(selection: any, row: IContract) {
    
    if (this.currentRowID.includes(row.id)) {
      this.currentRowID = this.currentRowID.filter(item => row.id !== item);
    } else {
      this.currentRowID.push(row.id);
    }
    this.updateStateOfContracts();
    selection.toggle(row);
  }

  onContractChecked(event: any, selection: any, row: IContract) {
    this.onSelectContract(selection, row);
    return event ? selection.toggle(row) : null
  }
}
