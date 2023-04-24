import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .online {
            fontStyle:"bold",
        }
    `]
})
export class ServerComponent{
    serverId = "1"
    serverStatus = 'offline'
    constructor(){
        this.serverStatus = Math.random() > 0.5 ?'online':'offline'
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getStatusColor(){
        return this.serverStatus == 'offline'?"red":"green";
    }
}