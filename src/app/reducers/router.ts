// import { StoreModule, ActionReducerMap } from '@ngrx/store';
// import { Params, RouterStateSnapshot, RoutesRecognized } from '@angular/router';
// import {
//     RouterReducerState,
//     RouterStateSerializer,
//     RouterAction,
//     ROUTER_NAVIGATION,
//     ROUTER_CANCEL,
//     ROUTER_ERROR,
// } from '@ngrx/router-store';

// export const ROUTER_ACTIVE = 'ROUTER_ACTIVE';

// export interface RouterStateUrl {
//     url: string;
//     params: Params;
//     queryParams: Params;
// }

// export interface State extends RouterReducerState<RouterStateUrl> {
//     activeRoute: RouterStateUrl;
// }

// export class GreitcoRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
//     serialize(routerState: RouterStateSnapshot): RouterStateUrl {
//         let route = routerState.root;
//         while (route.firstChild) {
//             route = route.firstChild;
//         }

//         const { url } = routerState;
//         const queryParams = routerState.root.queryParams;
//         const params = route.params;

//         // Only return an object including the URL, params and query params
//         // instead of the entire snapshot
//         console.log(url, params, queryParams, 'router state');
//         return { url, params, queryParams };
//     }
// }

// export const reducer = (
//     state: State,
//     action: RouterAction<any, any> |
//             {
//                 type: 'ROUTER_ACTIVE';
//                 payload: {
//                     routerState: RouterStateUrl,
//                     event: RoutesRecognized
//                 }
//             }
// ): State => {
//     switch (action.type) {
//         case ROUTER_ACTIVE: {
//             return {...state, activeRoute: action.payload.routerState};
//         }
//         case ROUTER_NAVIGATION:
//         case ROUTER_ERROR:
//         case ROUTER_CANCEL:
//             return {
//                 activeRoute: ( state && typeof state.activeRoute !== 'undefined' ) ? state.activeRoute : null,
//                 state: action.payload.routerState,
//                 navigationId: action.payload.event.id,
//             };
//         default: {
//             return state;
//         }
//     }
// };

// export const getNavigationId = (routerState: State) => routerState.navigationId;
// export const getRouterState = (routerState: State) => routerState.state;
// export const getActiveRoute = (routerState: State) => routerState.activeRoute;


import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
    StoreRouterConnectingModule,
    RouterReducerState,
    RouterStateSerializer,
    routerReducer
} from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export interface State extends RouterReducerState<RouterStateUrl> { }

export class GreitcoRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }

        const { url } = routerState;
        const queryParams = routerState.root.queryParams;
        const params = route.params;

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }
}

export const reducer = routerReducer;

