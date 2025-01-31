import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { RegisterUserDto } from './register-user.dto';
import { RegisterUserService } from './register-user.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerUserForm : FormGroup;
  formValue : any;
  

  constructor(
    private formBuilder : FormBuilder,
    private registerUserService : RegisterUserService

  ) { }

  ngOnInit(): void {
    this.registerUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
  });

  this.retriveAllUser();
  
  }

  registerUser(){
    this.formValue = this.registerUserForm.value;
    const registerUserDto: RegisterUserDto = {
      name: this.formValue.name,
      contactNumber: this.formValue.contactNumber,
      email: this.formValue.email,
      address: this.formValue.address
    };
    // call the server
    this.registerUserService.registerUser(registerUserDto).subscribe(res =>{
      console.log(res);
    });
     
    }

    retriveAllUser(){
      this.registerUserService.getAllRegisterUser().subscribe(res =>{
        console.log(res['data']);
      })
    }
 
}


