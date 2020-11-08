import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {NewUser} from "./new-user.interface";
import {environment} from "../../../environments/environment";

const API = environment.ApiUrl;

@Injectable()
export class SignupService{

  constructor(private httpCliente:HttpClient) {}
  checkUserNameTaken(userName:string){
   return this.httpCliente.get(API + 'validUser/' + userName)
  }
  newUser( newUser:NewUser ){
    return this.httpCliente.post(API + 'signup',newUser);
  }
}
