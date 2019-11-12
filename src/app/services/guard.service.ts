import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Injectable()
export class CanActivateGuard implements CanActivate {
  private connected = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
  ) {
    this.subscriptions.push(
      this.store.select( fromRoot.getAuthUser )
      .subscribe( user => {
        if ( user !== null ) {
            this.connected = true;
        } else {
          const authData = localStorage.getItem('auth');
          if ( authData != null ) {
            this.connected = true;
          } else {
            this.connected = false;
          }
        }
        console.warn('CONNECTED', this.connected);
      })
    );
  }

  public canActivate() {
    // test here if you user is logged
    // if ( !this.connected ) {
    //   this.router.navigate( [ 'login' ] );
    // }
    // return this.connected;
    return true;
  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // return component.canDeactivate ? component.canDeactivate() : true;
    return true;
  }
}
