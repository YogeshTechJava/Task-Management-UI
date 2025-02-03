import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm : FormGroup

  constructor(
     private formBuilder : FormBuilder,
     private router: Router
  ) { }

  ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      });
    
  }

  login(){

  }

  navigateToRegisterUser(){
    this.router.navigate(['/register']);
  }

}
