import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activated;
  activeSub : Subscription;
  constructor(private userService :UserService) {}
  ngOnDestroy(): void {
    this.activeSub.unsubscribe();
  }

  ngOnInit() {
    this.activeSub = this.userService.activatedEmitted.subscribe(
      data =>{
        this.activated=data;
      }
    );
  }
}
