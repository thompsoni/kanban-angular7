import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { JsonServiceClient } from '@servicestack/client';
import {
  LoginRequest,
  LoginResponse,
  LoggedInUserDto,
} from '../models/a360.dtos';
import { ServiceStackService } from './service-stack.service';
import 'rxjs/add/observable/from';

const API_PATH = environment.apiUrl;

@Injectable()
export class AuthService {

  constructor(
    private serviceStack: ServiceStackService,
  ) { }

  public loginArchive(username: string, password: string): Observable<LoginResponse> {
    const request = new LoginRequest();
    request.userName = username;
    request.password = password;
    request.rememberMe = true;
    // request.continue = '';
    return Observable.from( this.serviceStack.client.post(request, {}) );
  }

  /* public logoutArchive(): Observable<LogUserOutResponse> {
    const request = new LogUserOutRequest();
    return Observable.from( this.serviceStack.client.post(request, {}) );
  }*/

  public getRoles() {
    const authData: LoggedInUserDto = JSON.parse(localStorage.getItem('auth'));
    return authData ? authData.role : '';
  }

}
