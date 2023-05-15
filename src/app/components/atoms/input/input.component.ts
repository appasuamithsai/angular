import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NameService } from 'src/app/services/name.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnChanges{
  @Input() placeholder : string = "";

  constructor(private nameService: NameService){}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  
  onInputChange(event:any){
    this.nameService.emitNameChangeEvent(event.target.value);
  }
}
