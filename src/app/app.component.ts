import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PlatformLocation } from '@angular/common';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private routeScrollPositions: { [url: string]: number }[] = [];
  private subscriptions: Subscription[] = [];
  private wasPop = false;
  private previousNavigationUrl: string;

  constructor(
    private router: Router,
    private location: PlatformLocation,
    private store: Store<State>
  ) {
    // TODO
  }

  public ngOnInit() {
    history.scrollRestoration = 'manual';

    this.location.onPopState(() => {
      // location
      this.wasPop = true;
    });

    this.subscriptions.push(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          const index =
            this.previousNavigationUrl !== null
              ? this.previousNavigationUrl
              : event.url;
          this.routeScrollPositions[index] = window.pageYOffset;
        } else if (event instanceof NavigationEnd) {
          this.previousNavigationUrl = event.url;
          if (this.wasPop) {
            setTimeout(() => {
              window.scrollTo(0, this.routeScrollPositions[event.url] || 0);
            }, 1000);
            this.wasPop = false;
          } else {
            window.scrollTo(0, 0);
          }
        }
      })
    );
  }

  public ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
