// /* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from "@angular/core/testing";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

// import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
// import { UserComponent } from './user.component';
// import { UserService } from "./user.service";
// import { DataService } from "../shared/data.service";

// describe('Component: User', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserComponent]
//     });
//   });

//   it('should create the app', () => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it('should use the user name from the service', () => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     let userService = fixture.debugElement.injector.get(UserService);
//     fixture.detectChanges();
//     expect(userService.user.name).toEqual(app.user.name);
//   });

//   it('should display the user name if user is logged in', () => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     app.isLoggedIn = true;
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('p').textContent).toContain(app.user.name);
//   });

//   it('shouldn\'t display the user name if user is not logged in', () => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
//   });

//   it('shouldn\'t fetch data successfully if not called asynchronously', () => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     let dataService = fixture.debugElement.injector.get(DataService);
//     let spy = spyOn(dataService, 'getDetails')
//       .and.returnValue(Promise.resolve('Data'));
//     fixture.detectChanges();
//     expect(app.data).toBe(undefined);
//   });

//   it('should fetch data successfully if called asynchronously', async(() => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     let dataService = fixture.debugElement.injector.get(DataService);
//     let spy = spyOn(dataService, 'getDetails')
//       .and.returnValue(Promise.resolve('Data'));
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       expect(app.data).toBe('Data');
//     });
//   }));

//   it('should fetch data successfully if called asynchronously', fakeAsync(() => {
//     let fixture = TestBed.createComponent(UserComponent);
//     let app = fixture.debugElement.componentInstance;
//     let dataService = fixture.debugElement.injector.get(DataService);
//     let spy = spyOn(dataService, 'getDetails')
//       .and.returnValue(Promise.resolve('Data'));
//     fixture.detectChanges();
//     tick();
//     expect(app.data).toBe('Data');

//   }));
// });

describe('Component: User', () => {

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[UserComponent]
    });
  });

  it('User Compoent',()=>{
    const fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })


  it('should use the user name from the service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should display should not the user name if user is logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compilted = fixture.debugElement.nativeElement;
    expect(compilted.querySelector('p').textContent).not.toContain(app.user.name);
  });


  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService,'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('shouldn\'t fetch data successfully if  called asynchronously', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService,'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(app.data).toBe('Data');
    });
  }));

  it('shouldn\'t fetch data successfully if  called asynchronously', fakeAsync(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService,'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }));
});