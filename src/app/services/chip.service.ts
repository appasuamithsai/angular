import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChipService {

  chipChange: EventEmitter<string> = new EventEmitter();
  public selectedChip: string = "My contracts";
  constructor() {}

  emitChipChangeEvent(value:string) {
    this.selectedChip=value;
    this.chipChange.emit(value);
  }

  getChipChangeEmitter() {
    return this.chipChange;
  }
}
