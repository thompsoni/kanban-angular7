import { Action } from '@ngrx/store';
import { Credentials } from '../models/jwt';
import {
  LoginRequest,
  LoginResponse,
  ResponseError,
} from '../models/a360.dtos';

export const LOGIN =            '[Auth] Login';
export const LOGIN_COMPLETE =   '[Auth] Login Complete';
export const LOGIN_ERROR =      '[Auth] Login Error';
export const LOGOUT =           '[Auth] Logout';
export const LOGOUT_COMPLETE =  '[Auth] Logout Complete';
export const LOGOUT_ERROR =     '[Auth] Logout Error';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class LoginAction implements Action {
  public readonly type = LOGIN;
  public payload: Credentials;

  constructor(payload: Credentials) {
    this.payload = payload;
   }
}

export class LoginCompleteAction implements Action {
  public readonly type = LOGIN_COMPLETE;
  public payload: LoginResponse;

  constructor(payload: LoginResponse) {
    this.payload = payload;
  }
}

export class LoginErrorAction implements Action {
  public readonly type = LOGIN_ERROR;
  public payload: ResponseError;

  constructor(payload: ResponseError) {
    this.payload = payload;
  }
}

export class LogoutAction implements Action {
  public readonly type = LOGOUT;
}

export class LogoutCompleteAction implements Action {
  public readonly type = LOGOUT_COMPLETE;
}

export class LogoutErrorAction implements Action {
  public readonly type = LOGOUT_ERROR;
  public payload: ResponseError;

  constructor(payload: ResponseError) {
    this.payload = payload;
  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoginAction
  | LoginCompleteAction
  | LoginErrorAction
  | LogoutAction
  | LogoutCompleteAction
  | LogoutErrorAction;
