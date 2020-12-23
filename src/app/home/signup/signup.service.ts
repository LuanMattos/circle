import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {NewUser} from './new-user.interface';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const API = environment.ApiUrl;

@Injectable()
export class SignupService{

  constructor(private httpCliente: HttpClient) {}
  checkUserNameTaken(userName: string){
   return this.httpCliente.get(API + 'valid_user/' + userName);
  }
  checkUserEmailTaken(userEmail: string){
   return this.httpCliente.post(API + 'valid_email/', {userEmail});
  }
  newUser( newUser: NewUser ){
    return this.httpCliente.post(API + 'signup', newUser);
  }
}
