import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forbidenNames = ['Chris','Anna'];
  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl(null, [Validators.required, this.checkForbidenNames.bind(this)]),
        'email':new FormControl(null, [Validators.required,Validators.email],this.checkForbidenEmails),
      }),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    });
    // this.signUpForm.valueChanges.subscribe(
    //   (status)=>{
    //     console.log(status);
    //   }
    // );
    // this.signUpForm.statusChanges.subscribe(
    //   (status)=>{
    //     console.log(status);
    //   }
    // );
  }
  genders = ['male', 'female'];
  signUpForm : FormGroup

  onSubmit(){
    console.log(this.signUpForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls(){
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  checkForbidenNames(control : FormControl) : { [s:string]:boolean}{
    if(this.forbidenNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }

  checkForbidenEmails(control : FormControl) : Observable<any> | Promise<any>{
    const promise = new Promise(
      (resolve,reject)=>{
        if(control.value === "ldp4@zemosolabs.com"){
          resolve({"emailIsForbidden":true});
        }else{
          resolve(null);
        }
      }
    );
    return promise;
  }
}
