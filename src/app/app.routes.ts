import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate, CanDeactivate } from '@angular/router';
import { CanActivateGuard, ConfirmDeactivateGuard } from './services/guard.service';
// import { PageExistsGuard } from './guards/page-exists.guard';

// Components
import { HomeComponent } from './pages/home/home.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
import { LoginComponent } from './pages/login/login.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  // logged routes
  {
    path: '',
    component: LayoutsAuthComponent,
    canActivate: [CanActivateGuard],
    children: [
      {
        path: '',
        canActivate: [ CanActivateGuard ],
        loadChildren: './pages/epic-timeboxes/epic-timeboxes.module#EpicTimeboxesModule'
      },
    ],
  },
  // not logged routes
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
  },
  {
    path: 'not-found',
    loadChildren: './pages/not-found/not-found.module#NotFoundModule',
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
