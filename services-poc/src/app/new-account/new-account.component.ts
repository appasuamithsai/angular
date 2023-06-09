import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accouts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private loggingService : LoggingService, private accountsService : AccountsService){
    this.accountsService.statusUpdated.subscribe((status : string) => {
        alert(status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount({
      name: accountName,
      status: accountStatus
    });
    // this.loggingService.logStatusChange(accountStatus);
  }
}
