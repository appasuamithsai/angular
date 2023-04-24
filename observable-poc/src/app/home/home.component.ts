import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable, pipe } from 'rxjs';
// import { Observable } from 'rxjs-compat';
import { count } from 'rxjs-compat/operator/count';

import { filter,map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  private firstSubscription : Subscription
  constructor() { }
  

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(
    //   (count)=>{console.log(count);}
    // )
    const customObservable = Observable.create(
      (observer:any) =>{
        let count = 0;
        setTimeout(()=>{
          if(count >=0){
            observer.complete();
          }
          count++;
          if(count >=1){
            observer.error(new Error("Unknown eror"));
          }
          observer.next(count);
          
        },100);
      }
    );
    this.firstSubscription = customObservable.pipe(filter(
      (data:number)=>{
        if(data>0) return true;
        return false;
      }, map(
        (data:number)=>{
          return "round"+(data+1);
        }
      )
    )).subscribe(
      (data)=>{console.log(data);},err =>{
        console.log(err);
        alert(err);
      },()=>{
        console.log("Completed");
      }
    )
  }

  ngOnDestroy() {
    this.firstSubscription.unsubscribe()
  }

}
