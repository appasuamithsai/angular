import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverInput') serverHtmlInput : ElementRef ;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName:serverInput.value,
      serverContent:this.serverHtmlInput.nativeElement.value
    });
  }

  onAddBlueprint(blueprintInput : HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:blueprintInput.value,
      serverContent:this.serverHtmlInput.nativeElement.value
    });
  }
}
