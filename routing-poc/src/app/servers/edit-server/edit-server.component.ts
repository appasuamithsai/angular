import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;
  constructor(private serversService: ServersService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParmas:Params)=>{
        console.log(queryParmas['allowEdit']);
        this.allowEdit = queryParmas['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.queryParams.subscribe((queryParmas:Params)=>{

    });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}