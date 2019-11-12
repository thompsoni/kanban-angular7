import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GrowlService } from '../services/growl.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private growlService: GrowlService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot): boolean {

    const userRoles = this.authService.getRoles();  // <--------- get the current user's roles
    const routeRoles: string[] = route.data['roles'];   // <------- Will get the roles arry you defined in your router config

    /*
      Now you can do your logic to determine if the user has the appropriate role.
      If they do return true
      Else use router to set a redirect route to /user url or whereever you feel like and return false;
    */
    if (routeRoles.indexOf(userRoles) !== -1) {
      return true;
    } else {
      this.growlService.showError(
        'Cannot view this page',
        'Permission denied',
      );
      this.router.navigate( [ '../' ] );
    }
    return false;
  }
}
