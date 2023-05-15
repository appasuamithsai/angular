import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  nameChange: EventEmitter<string> = new EventEmitter();
  constructor() {}
  currentName: string = "";

  emitNameChangeEvent(value:string) {
    this.currentName = value;
    this.nameChange.emit(value);
  }

  getNameChangeEmitter() {
    return this.nameChange;
  }
}
