import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector:'[app-servers]',
  selector:'.app-servers',
  templateUrl:'./servers.component.html',
  // template: `<app-server></app-server><p>Next</p><app-server></app-server><app-server></app-server>`,
  // styleUrls: ['./servers.component.css']
  styles: [`
  h3  {
    color: red;
  }
`]
})
export class ServersComponent {
    allowAddingServers = false
    serverCreateStatus = "No Server Created!"
    serverName = ""
    serverCreated = false
    servers = ["TestServer 1", "TestServer 2"]
    constructor(){
      setTimeout(()=>{
        this.allowAddingServers = true
      },2000);
    }
    onServerCreated(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreateStatus = this.serverName+" was created sucessfully!"
    }
    onUpdateServerName(event:Event){
      this.serverName =(<HTMLInputElement>event.target).value;
    }

}
