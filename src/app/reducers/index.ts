import { createSelector, createFeatureSelector } from '@ngrx/store';
import { environment } from '../../environments/environment';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { ActionReducer, combineReducers } from '@ngrx/store';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose, ActionReducerMap } from '@ngrx/store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
// incompatible with prod build
// import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromRouter from './router';
import * as fromEpics from './epic';
import * as fromAuth from './auth';
import { Params } from '@angular/router';
import * as moment from 'moment/moment';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  auth: fromAuth.State;
  epics: fromEpics.State;
  routerReducer: fromRouter.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  epics: fromEpics.reducer,
  routerReducer: fromRouter.reducer,
};

/*
const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
*/

export const getRouterState = createFeatureSelector<fromRouter.State>(
  'routerReducer'
);

// export const getRouter = createFeatureSelector<fromRouter.State>(
//   'routerReducer'
// );

// export const getActiveRoute = createSelector(getRouter, fromRouter.getActiveRoute);
// export const getRouterState = createSelector(getRouter, fromRouter.getRouterState);

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getBooksState);
 * 	}
 * }
 * ```
 */

/* AUTH */
export const getAuthState = (state: State) => state.auth;
export const getAuthUser = createSelector(getAuthState, fromAuth.getUser);
/*export const getUser = createSelector(getAuthState, fromAuth.getUser);
export const getRole = createSelector(getAuthState, fromAuth.getRole);
export const getAccessToken = createSelector(
  getAuthState,
  fromAuth.getAccessToken
);
export const getTokenType = createSelector(getAuthState, fromAuth.getTokenType);
export const getRefreshToken = createSelector(
  getAuthState,
  fromAuth.getRefreshToken
);
export const aboutToExpire = createSelector(
  getAuthState,
  fromAuth.aboutToExpire
);*/

/* Epics */
export const getEpicsState = createFeatureSelector<fromEpics.State>('epics');

export const {
  selectEntities: getEpicsEntities,
  selectAll: getAllEpics,
  selectIds: getEpicsIds,
  selectTotal: getEpicsTotal,
} = fromEpics.adapter.getSelectors(getEpicsState);

export const getSelectedEpicsId = createSelector(
  getEpicsState,
  fromEpics.getSelectedId
);
export const getSelectedEpics = createSelector(
  getEpicsEntities,
  getSelectedEpicsId,
  (entities, selectedId) => entities[selectedId]
);

