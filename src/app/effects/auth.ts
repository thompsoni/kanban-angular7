import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as auth from '../actions/auth';
import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/jwt';
import { Router } from '@angular/router';
import {
  takeUntil,
  map,
  catchError,
  tap,
  debounceTime,
  distinctUntilChanged,
  skip,
  switchMap,
  mergeMap,
} from 'rxjs/operators';
import {
  LoginRequest,
  LoginResponse,
  ResponseError,
} from '../models/a360.dtos';

declare var localStorage: any;

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class AuthEffects {

  @Effect()
  public login$: Observable<Action> = this.actions$
    .ofType<auth.LoginAction>(auth.LOGIN)
    .pipe(
      map(action => action.payload),
      switchMap((credentials: Credentials) => {

        console.log('Trigger login start');
        if (credentials.username === '' || credentials.password === '') {
          console.warn('USERNAME OR PASSWORD EMPTY');
          return empty();
        }

        return this.authService
          .loginArchive(credentials.username, credentials.password)
          .pipe(
            map((result: LoginResponse) => {
              const data = { 'id': result.result.id, 'role': result.result.role, 'username': credentials.username };
              localStorage.setItem('auth', JSON.stringify(data));
              return new auth.LoginCompleteAction(result);
            }),
            catchError((err: ResponseError) => {
              localStorage.removeItem('auth');
              return of(new auth.LoginErrorAction(err));
            })
          );
      })
    );

  @Effect({ dispatch: false })
  public loginComplete$: Observable<Action> = this.actions$
    .ofType<auth.LoginCompleteAction>(auth.LOGIN_COMPLETE) // event type to listen
    .pipe(
      tap(details => {
        console.log('DOING LOGIN COMPLETE', details);
        this.router.navigate(['/']);
      })
    );

  /*@Effect()
  public logout$: Observable<Action> = this.actions$
    .ofType<auth.LoginAction>(auth.LOGOUT)
    .pipe(
      switchMap(() => {

        return this.authService
          .logoutArchive()
          .pipe(
            map((result: LogUserOutResponse) => {
              localStorage.removeItem('auth');
              return new auth.LogoutCompleteAction();
            }),
            catchError((err: ResponseError) => {
              return of(new auth.LogoutErrorAction(err));
            })
          );
      })
    );*/

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
