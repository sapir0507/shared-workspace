import { SerivceService } from './../../app/service/state.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl(undefined, [Validators.required]),
    password1: new FormControl(undefined, Validators.compose([Validators.required, Validators.minLength(4)])),
    password2: new FormControl(undefined, Validators.compose([Validators.required, Validators.minLength(4)])),
    email: new FormControl(undefined, Validators.compose([Validators.required,Validators.email])),
    phone: new FormControl(undefined, [Validators.required]),
    fullName: new FormControl(undefined, Validators.compose([Validators.required]))

  })

  constructor(private state: SerivceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formGroup.value)
    let user: User = {
      id: this.state.allUsers.length + 1,
      username: this.formGroup.value.username,
      password: this.formGroup.value.password,
      email: this.formGroup.value.email,
      phone: this.formGroup.value.phone,
      fullName: this.formGroup.value.fullName
    }
    this.addNewUser(user)
  }

  addNewUser(user: User){
    this.state.addNewUser((<User>user))
    console.log(this.state.allUsers)
  }

}
