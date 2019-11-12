// import { Injectable, Injector } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { _throw } from 'rxjs/observable/throw';
// import { LoaderService } from './loader.service';
// import { catchError, finalize, map } from 'rxjs/operators';

// @Injectable()
// export class LoaderInterceptor implements HttpInterceptor {
//   constructor(private inj: Injector) {}

//   get loaderService(): LoaderService {
//     return this.inj.get(LoaderService);
//   }
//   public intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     this.loaderService.addRequest();

//     return next
//       .handle(request)
//       .pipe(
//         map(event => event),
//         catchError(error => _throw(error)),
//         finalize(() => this.loaderService.completeRequest())
//       );
//   }
// }
