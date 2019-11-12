// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// export interface LoaderState {
//   total: number;
//   complete: number;
// }

// @Injectable()
// export class LoaderService {
//   private timeout: any;
//   public state: BehaviorSubject<LoaderState> = new BehaviorSubject({
//     total: 0,
//     complete: 0,
//   });

//   constructor() {}

//   public completeRequest() {
//     const next = {
//       total: this.state.getValue().total,
//       complete: ++this.state.getValue().complete,
//     };

//     this.state.next(next);

//     if (next.total === next.complete) {
//       // All done no progress to display
//       this.timeout = setTimeout(() => {
//         this.state.next({
//           total: 0,
//           complete: 0,
//         });
//       }, 1);
//     } else if (this.timeout) {
//       clearTimeout(this.timeout);
//     }
//   }

//   public addRequest() {
//     this.state.next({
//       total: ++this.state.getValue().total,
//       complete: this.state.getValue().complete,
//     });
//   }
// }
