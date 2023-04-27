import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {email, password} from '../../utils/validators'
import { Validators } from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm = new FormGroup({
  email: new FormControl('', [Validators.email]),
  password: new FormControl('', password)
})

onSubmit = () => {
  console.log(this.loginForm.value)
}



}
