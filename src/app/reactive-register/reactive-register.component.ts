import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    });
  }
    
  login() {
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    alert('email: ' + this.loginForm.value.email + ' password: ' + this.loginForm.value.password)
  }
    

  ngOnInit() {
  }
}
