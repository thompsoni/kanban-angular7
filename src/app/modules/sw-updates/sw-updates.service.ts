// import { Inject, Injectable, OnDestroy } from '@angular/core';
// import { NgServiceWorker } from '@angular/service-worker';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { LoggerService } from '../../services/logger.service';
// import { concat, filter, startWith, takeUntil, tap, map, debounceTime, take } from 'rxjs/operators';


// /**
//  * SwUpdatesService
//  *
//  * Used as base from https://github.com/angular/angular/blob/master/aio/src/app/sw-updates/sw-updates.service.ts
//  *
//  * @description
//  * 1. Checks for available ServiceWorker updates once instantiated.
//  * 2. As long as there is no update available, re-checks every 6 hours.
//  * 3. As soon as an update is detected, it activates the update and notifies interested parties.
//  * 4. It continues to check for available updates.
//  *
//  * @property
//  * `updateActivated` {Observable<string>} - Emit the version hash whenever an update is activated.
//  */
// @Injectable()
// export class SwUpdatesService implements OnDestroy {
//   private checkInterval = 1000 * 60 * 60 * 6;   // 6 hours
//   private onDestroy = new Subject();
//   private checkForUpdateSubj = new Subject();
//   public updateActivated = this.sw.updates
//     .pipe(
//       takeUntil(this.onDestroy),
//       tap(evt => this.log(`Update event: ${JSON.stringify(evt)}`)),
//       filter(({ type }) => type === 'activation'),
//       map(({ version }) => version)
//     );

//   constructor(private logger: LoggerService, private sw: NgServiceWorker) {
//     this.checkForUpdateSubj
//       .pipe(
//         debounceTime(this.checkInterval),
//         startWith(null),
//         takeUntil(this.onDestroy)
//       )
//       .subscribe(() => this.checkForUpdate());
//   }

//   public ngOnDestroy() {
//     this.onDestroy.next();
//     this.onDestroy.complete();
//   }

//   private activateUpdate() {
//     this.log('Activating update...');
//     this.sw.activateUpdate(null)
//       .pipe(
//         takeUntil(this.onDestroy)
//       )
//       .subscribe(() => this.scheduleCheckForUpdate());
//   }

//   private checkForUpdate() {
//     this.log('Checking for update...');
//     this.sw.checkForUpdate()
//       .pipe(
//         takeUntil(this.onDestroy),
//         // Temp workaround for https://github.com/angular/mobile-toolkit/pull/137.
//         // TODO (gkalpak): Remove once #137 is fixed.
//         concat(Observable.of(false)),
//         take(1),
//         tap(v => this.log(`Update available: ${v}`))
//       )
//       .subscribe(v => v ? this.activateUpdate() : this.scheduleCheckForUpdate());
//   }

//   private log(message: string) {
//     this.logger.log('SwUpdates', message);
//   }

//   private scheduleCheckForUpdate() {
//     this.checkForUpdateSubj.next();
//   }
// }
