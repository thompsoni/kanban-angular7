import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';
import { Store, ActionsSubject } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import * as fromRoot from '../../reducers';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { GrowlService } from '../../services/growl.service';

@Component({
  selector: 'app-header',
  styleUrls: ['./app-header.component.css'],
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  public online: Observable<boolean>;
  private onDestroy = new Subject();
  public menuDisabled = false;
  @Input() public links: Array<any> = [];

  constructor(
    private store: Store<State>,
    public ts: ToggleService,
    public router: Router,
    private actionsSubject: ActionsSubject,
    private growlService: GrowlService,
  ) {
  }

  public ngOnInit() {
    // this.store.select(fromRoot.getRouter).pipe( takeUntil(this.onDestroy) )
    // .subscribe(
    //   res => {
    //     if ( res.activeRoute.url === '/' || res.activeRoute.url.split('/').length >= 3 || res.activeRoute.url === '/portfolios'  ) {
    //       this.menuDisabled = true;
    //     } else {
    //       this.menuDisabled = false;
    //     }
    //     console.warn('MENU', this.menuDisabled, res.activeRoute.url);
    //   }
    // );
    this.store.select(fromRoot.getRouterState).pipe( takeUntil(this.onDestroy) )
    .subscribe(
      res => {
        if ( res.state.url === '/' || res.state.url.split('/').length >= 3
        || res.state.url === '/portfolios' || res.state.url === '/admin'  ) {
          this.menuDisabled = true;
        } else {
          this.menuDisabled = false;
        }
      }
    );

    // not needed anymore
    // listen to unauthorized errors
    // this.actionsSubject
    // .pipe( takeUntil(this.onDestroy) )
    // .subscribe( (res: any) => {
    //   if ( res.payload != null ) {
    //     if ( res.payload.responseStatus != null ) {
    //       if ( res.payload.responseStatus.errorCode === '401' ) {
    //         this.router.navigate(['login']);
    //         this.growlService.showError('Unauthorized', 'Login to access the resource');
    //       }
    //     }
    //   }
    // });
  }

  public anySubActive(item) {
    return item.sublinks.reduce((a, b) => {
      return a || this.router.isActive(b.link.join('/'), false);
    }, false);
  }

  public collapseMenu(title: string) {
    // if ( title.toLowerCase() === 'home' ) {
    //   if ( !this.ts.getValue('sidebar-collapse', 'layout-navigation-collapse') ) {
    //     this.ts.toggle('sidebar-collapse', 'layout-navigation-collapse');
    //   }
    // } else {
    //   if ( this.ts.getValue('sidebar-collapse', 'layout-navigation-collapse') ) {
    //     this.ts.toggle('sidebar-collapse', 'layout-navigation-collapse');
    //   }
    // }

    this.ts.resetNamespace('menu-aside');
  }

  public ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
