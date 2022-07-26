import { Injectable } from '@angular/core';
import {HttpServiceService} from 'src/app/services/http/http-service.service'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http:HttpServiceService) { }
  Register(RegisterData){
    this.http.postData(RegisterData,"/user/register");
  }
  Login(LoginData){
    this.http.postData(LoginData,"/user/login")
  }
}
