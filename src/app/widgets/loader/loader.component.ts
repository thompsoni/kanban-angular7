// import {
//   Component,
//   ChangeDetectionStrategy,
//   OnInit,
//   OnDestroy,
//   ChangeDetectorRef,
// } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
// import { LoaderService, LoaderState } from './loader.service';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// @Component({
//   styles: [
//     `
//     :host {
//         position: relative;
//         z-index: 222000;
//     }
//     `,
//   ],
//   selector: 'app-loader',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   template: `

//     `,
// })
// export class LoaderComponent implements OnInit, OnDestroy {
//   public progress = 0;
//   private subscription: Subscription;

//   public constructor(
//     private chRef: ChangeDetectorRef,
//     private loaderService: LoaderService
//   ) {}

//   public ngOnInit() {
//     this.subscription = this.loaderService.state.subscribe(
//       (state: LoaderState) => {
//         if (state.total === state.complete) {
//           this.progress = 100;
//         } else {
//           this.progress = 100 * state.complete / state.total;
//         }

//         this.chRef.markForCheck();
//       }
//     );
//   }

//   public ngOnDestroy() {
//     this.subscription.unsubscribe();
//     this.chRef.detach();
//   }
// }
