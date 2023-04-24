import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template:`<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer : boolean = false;
  serverCreatedStatus : string = "No Server Created";
  serverName : string = "Data";
  serverAdded : boolean = false;
  servers  = ['TestServer',  '5G server'];
  constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreatedStatus = "New Server Created!!! with name "+this.serverName;
    this.serverAdded = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
