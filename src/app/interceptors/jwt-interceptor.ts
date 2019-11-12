// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import * as fromRoot from '../reducers';
// import { forkJoin } from 'rxjs/observable/forkJoin';
// import { flatMap, take } from 'rxjs/operators';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//   constructor(public store: Store<fromRoot.State>) {}
//   public intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     if (request.headers.has('x-auth-jwt')) {
//       let headers = request.headers.delete('x-auth-jwt');

//       console.log('Request intercepted', request);
//       return forkJoin(
//         // this.store.select(fromRoot.getTokenType).pipe(take(1)),
//         // this.store.select(fromRoot.getAccessToken).pipe(take(1))
//       ).pipe(
//         flatMap<[string, string], HttpEvent<any>>(res => {
//           headers = headers.set('Authorization', `${res[0]} ${res[1]}`);
//           const request2 = request.clone({ headers: headers });
//           return next.handle(request2);
//         })
//       );
//     } else {
//       return next.handle(request);
//     }
//   }
// }
