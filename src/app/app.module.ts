// external module
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule, ActionReducer, MetaReducer, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromRoot from './reducers';
import {AgGridModule} from 'ag-grid-angular/main';
import {TreeModule} from 'primeng/components/tree/tree';
import { OverlayPanelModule } from 'primeng/components/overlaypanel/overlaypanel';
import { ContextMenuModule } from 'primeng/components/contextmenu/contextmenu';
import 'rxjs/add/operator/take';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer,
  bootloader,
} from '@angularclass/hmr';

// Effects
import { EffectsModule } from '@ngrx/effects';
// import { RouterExtensionModule } from 'app/widgets/router-extension';
import { AuthEffects } from './effects/auth';
import { EpicEffects } from './effects/epic';
import { MenuHostModule } from './widgets/menu-host';

import { SharedModule } from 'primeng/components/common/shared';
import { AgmCoreModule } from '@agm/core';

import { reducers } from './reducers';

import { environment } from '../environments/environment';
import { UIGrowlModule } from './widgets/growl/growl.module';
// import { SwUpdatesModule } from './modules/sw-updates/sw-updates.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export function debugMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    if (environment.silent) {
      return reducer(state, action);
    } else {
      let grouped = true;
      if (console.groupCollapsed) {
        console.groupCollapsed(action.type);
      } else if (console.group) {
        console.groupCollapsed(action.type);
      } else {
        grouped = false;
        console.log('8<' + '-'.repeat(action.type.length) + '\n' + action.type);
      }
      console.log('current action', action);
      console.log('previous state', state);
      const newState = reducer(state, action);
      console.log('next state', newState);

      if (grouped) {
        console.groupEnd();
      } else {
        console.log('-'.repeat(action.type.length) + '>8');
      }
      return newState;
    }
  };
}
// make sure you export for AoT
export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state: any, action: any) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}

let _metaReducers: MetaReducer<fromRoot.State, any>[] = [];
if (environment.hmr) {
  _metaReducers = [debugMetaReducer, stateSetter];
} else {
  _metaReducers = [debugMetaReducer];
}

export const metaReducers = _metaReducers;

const modules = [
  AgmCoreModule.forRoot({
    apiKey: environment.googleMapsApiKey,
  }),
  /**
   * StoreModule.provideStore is imported once in the root module, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   */
  // StoreModule.provideStore(reducer),
  StoreModule.forRoot(reducers, { metaReducers }),
  /**
   * EffectsModule.run() sets up the effects class to be initialized
   * immediately when the application starts.
   *
   * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
   * One for each effects handler
   */
  EffectsModule.forRoot([
    AuthEffects,
    EpicEffects,
  ]),
  // RouterExtensionModule,
  MenuHostModule,
  TreeModule,
  OverlayPanelModule,
  ContextMenuModule,
  AgGridModule,
  SharedModule,
  UIGrowlModule,
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  ModalModule.forRoot(),
  // SwUpdatesModule,
  NgxChartsModule,
];

if (!environment.production) {
  const devImports: ModuleWithProviders[] = [
    StoreDevtoolsModule.instrument({
      maxAge: 25, //  Retains last 25 states
    }),
  ];

  modules.push(...devImports);
}

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './widgets/app-header';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';

const widgets = [
  AppComponent,
  BreadcrumbComponent,
  AppHeaderComponent,
  AppFooterComponent,
  MenuAsideComponent,
  MessagesBoxComponent,
  NotificationBoxComponent,
  TasksBoxComponent,
  // EpicMenuComponent,
  EpicTimeboxesMenuComponent,
];

import { AuthService } from './services/auth.service';
import { AvatarService } from './services/avatar.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard, ConfirmDeactivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
// import { PageExistsGuard } from './guards/page-exists.guard';
import { RouterStateSerializer } from '@ngrx/router-store';
import { LoggerService } from './services/logger.service';
import { ToggleService } from './services/toggle.service';
import { GreitcoRouterStateSerializer } from './reducers/router';
import { GrowlService } from './services/growl.service';
import { ServiceStackService } from './services/service-stack.service';
import { RoleGuard } from './guards/role.guard';
import { EpicService } from './services/epic.service';

// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { JwtInterceptor } from './interceptors/jwt-interceptor';
// import { LoaderInterceptor } from './widgets/loader/loader-interceptor';

const services = [
  AuthService,
  AvatarService,
  BreadcrumbService,
  GrowlService,
  MessagesService,
  CanActivateGuard,
  NotificationService,
  // PageExistsGuard,
  ConfirmDeactivateGuard,
  LoggerService,
  ToggleService,
  ServiceStackService,
  RoleGuard,
  EpicService,
  // {
  //   multi: true,
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: JwtInterceptor,
  // },
  // {
  //   multi: true,
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: LoaderInterceptor,
  // },
  {
    provide: RouterStateSerializer,
    useClass: GreitcoRouterStateSerializer,
  },
];

// The pages
// import { ClientComponent } from './pages/client/client.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
// import { LoginComponent } from './pages/login/login.component';

// ClientComponent,
const pages = [
  LayoutsAuthComponent,
  // LoginComponent,
];

// main bootstrap
import { routing } from './app.routes';
// import { EpicMenuComponent } from './pages/epics/menu/epic-menu.component';
import { EpicTimeboxesMenuComponent } from './pages/epic-timeboxes/menu/epic-timeboxes-menu.component';

// import { RouterStoreExtension } from './services/router-store-extension.service';

const entryComponents = [
  // EpicMenuComponent,
  EpicTimeboxesMenuComponent,
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [...widgets, ...pages],
  imports: [...modules, routing, StoreRouterConnectingModule],
  providers: [...services],
  entryComponents: [...entryComponents],
})
export class AppModule {
  constructor(
    private appRef: ApplicationRef,
    private store: Store<fromRoot.State>,
    // private rse: RouterStoreExtension,
  ) {
  }

  public hmrOnInit(store) {
    if (!store || !store.state) {
      return;
    }
    // restore state
    this.store.dispatch({ type: 'SET_ROOT_STATE', payload: store.state });
    // restore input values
    if ('restoreInputValues' in store) {
      const restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    Object.keys(store).forEach(prop => delete store[prop]);
  }

  public hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(
      cmp => cmp.location.nativeElement
    );
    let currentState: fromRoot.State;
    this.store.take(1).subscribe(state => (currentState = state));
    store.state = currentState;
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
