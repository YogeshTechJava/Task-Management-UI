import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserDto } from './register-user.dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  private apiUrl = `${environment.apiUrl}`; 
   

  constructor(private http: HttpClient) { }

  registerUser(registerUserDto: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/userResources/registerUser`, registerUserDto);
  }

  getAllRegisterUser():Observable<any> {
    return this.http.get(`${this.apiUrl}/userResources/getAllRegisterUser`)
  }
}
