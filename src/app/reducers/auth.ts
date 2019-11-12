import { createSelector } from '@ngrx/store';
import * as auth from '../actions/auth';
// import { JWTPayload, AuthUser } from '../models/jwt';
import {
  LoginRequest,
  LoginResponse,
  LoggedInUserDto,
} from '../models/a360.dtos';

declare var localStorage: any;

export interface State {
  user: LoggedInUserDto | null;
}

export const emptyState: State = {
  user: null,
};

const tokenJSON = localStorage.getItem('auth');
let tmpState = emptyState;
if (tokenJSON !== null) {

  const stateBase = JSON.parse(tokenJSON);

  tmpState = {
    user: stateBase.user,
  };
}

export const initialState = tmpState;

export function reducer(state = initialState, action: auth.Actions): State {

  switch (action.type) {
    case auth.LOGIN: {
      // console.log('auth reducer login', action);
      return emptyState;
    }

    case auth.LOGIN_COMPLETE: {
      console.log('auth reducer login complete', action);
      const decoded = null;

      return {
        user: action.payload.result
      };
    }

    case auth.LOGIN_ERROR: {
      console.log('auth reducer login error', action);
      return emptyState;
    }

    case auth.LOGOUT: {
      return emptyState;
    }

    default: {
      return state;
    }
  }
}


export const getUser = (state: State): LoggedInUserDto => {
  if (state.user == null) {
    return null;
  } else {
    return state.user;
  }
};
