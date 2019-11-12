import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credentials } from '../../models/jwt';
import * as fromRoot from '../../reducers';
import { LoginAction, LoginCompleteAction } from '../../actions/auth';
import { Router } from '@angular/router';
import {
  LoginRequest,
  LoginResponse,
  LoggedInUserDto,
} from '../../models/a360.dtos';
import { AuthService } from '../../services/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public pending$: Store<boolean>;
  public error$: Store<string>;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  public ngOnInit() {
  }

  public onSubmit($event: Credentials) {
    this.store.dispatch(new LoginAction( $event ));

    /*const userRole: SystemRolesEnum = 'SYSADMIN';
    const user: LoggedInUserDto = {
      resourceId: 100,
      role: userRole
    };

    const cred: LoginResponse = {
      result: user,
      responseStatus: null,
    };

    localStorage.setItem('auth', JSON.stringify(cred.result));
    this.store.dispatch(new LoginCompleteAction(cred));*/
  }
}
