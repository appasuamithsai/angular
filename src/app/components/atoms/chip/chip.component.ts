import { Component, Input } from '@angular/core';
import { ChipService } from 'src/app/services/chip.service';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
  @Input() content: string = 'My Cash Kicks';
  @Input() variant: string = 'body-1';
  @Input() height: string = '10px';
  @Input() width: string = '50px';
  @Input() selected : boolean = false ;
  
  constructor(private chipService : ChipService ){}

  onClick(element : HTMLElement){
    this.chipService.emitChipChangeEvent(this.content);
  }
}
