// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

// import * as fromRoot from '../reducers';
// import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

// /**
//  * Guards are hooks into the route resolution process, providing an opportunity
//  * to inform the router's navigation process whether the route should continue
//  * to activate this route. Guards must return an observable of true or false.
//  */
// @Injectable()
// export class PageExistsGuard implements CanActivate {
//   constructor(
//     private store: Store<fromRoot.State>,
//     private router: Router
//   ) {}

//   /**
//    * This method creates an observable that waits for the `loaded` property
//    * of the collection state to turn `true`, emitting one time once loading
//    * has finished.
//   waitForCollectionToLoad(): Observable<boolean> {
//     return this.store.select(fromRoot.getCollectionLoaded)
//       .filter(loaded => loaded)
//       .take(1);
//   }
//   */

//   /**
//    * This method checks if a page with the given SLUG is already registered
//    * in the Store
//    */
//   // private hasInStore(slug: string): Observable<boolean> {
//   //   return this.store
//   //     .select(fromRoot.getPageEntities)
//   //     .pipe(map(entities => !!entities[slug]), take(1));
//   // }

//   // /**
//   //  * This method loads a page with the given SLUG from the API and caches
//   //  * it in the store, returning `true` or `false` if it was found.
//   //  */
//   // private hasInApi(slug: string): Observable<boolean> {
//   //   return this.service.get(slug).pipe(
//   //     map(entity => new actions.LoadAction(entity)),
//   //     tap((action: actions.LoadAction) => this.store.dispatch(action)),
//   //     map(entity => !!entity),
//   //     catchError(() => {
//   //       this.router.navigate(['/not-found']);
//   //       return of(false);
//   //     })
//   //   );
//   // }

//   /**
//    * `hasPage` composes `hasPageInStore` and `hasPageInApi`. It first checks
//    * if the page is in store, and if not it then checks if it is in the
//    * API.
//    */
//   // private has(slug: string): Observable<boolean> {
//   //   return this.hasInStore(slug).pipe(
//   //     switchMap(inStore => {
//   //       if (inStore) {
//   //         return of(inStore);
//   //       }

//   //       return this.hasInApi(slug);
//   //     })
//   //   );
//   // }

//   /**
//    * This is the actual method the router will call when our guard is run.
//    *
//    * Our guard waits for the collection to load, then it checks if we need
//    * to request a book from the API or if we already have it in our cache.
//    * If it finds it in the cache or in the API, it returns an Observable
//    * of `true` and the route is rendered successfully.
//    *
//    * If it was unable to find it in our cache or in the API, this guard
//    * will return an Observable of `false`, causing the router to move
//    * on to the next candidate route. In this case, it will move on
//    * to the 404 page.
//    */
//   // public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
//   //   /*
//   //   return this.waitForCollectionToLoad()
//   //     .switchMap(() => this.hasPage(route.params['slug']));
//   //   */
//   //   return this.has(route.params.slug);
//   // }
// }
