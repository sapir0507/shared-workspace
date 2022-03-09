import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/app.interface';
import { SerivceService } from 'src/app/service/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, Validators.compose([Validators.required, Validators.minLength(4)]))
  })

  user: User = {
    id: 0,
    username: '',
    password: '',
    email: '',
    phone: 0,
    fullName: ''
  }

  constructor(private state:SerivceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formGroup.value)
    if(this.formGroup.valid){
      //go to server
    }
    else{
      console.error('Form is not Valid')
    }
  }

}
