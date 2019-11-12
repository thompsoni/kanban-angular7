import { Component, ComponentFactoryResolver, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, forwardRef } from '@angular/core';
import { LoggerService } from '../../../services/logger.service';

import { ToggleService } from '../../../services/toggle.service';
import { Subject } from 'rxjs/Subject';
import { NavigationEnd, Router, UrlTree, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { ActionsSubject, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs/Observable';
import { MenuHostDirective } from '../../../widgets/menu-host/menu-host.directive';
import { EpicTimeboxesMenuComponent } from '../../epic-timeboxes/menu/epic-timeboxes-menu.component';

@Component({
  selector: 'app-layouts-auth',
  templateUrl: './auth.html',
})
export class LayoutsAuthComponent implements OnInit, OnDestroy {
  private logger: LoggerService;
  public mylinks: Array<{ icon: string, link: {}[], title: string }> = [];
  private onDestroy = new Subject();
  public treeModule: string;
  @ViewChild(forwardRef(() => MenuHostDirective)) menuHost: MenuHostDirective;

  constructor(
    public ts: ToggleService,
    private router: Router,
    public chRef: ChangeDetectorRef,
    private store: Store<fromRoot.State>,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    // this.logger = new LoggerService(  );
  }

  public ngOnInit() {

    this.store.select(fromRoot.getRouterState).pipe(takeUntil(this.onDestroy))
    .subscribe(
      res => {
        console.log('ROUTER:', res);
        // this.loadTreeComponent(res.state.url.split('/')[1]);
        const urlLength = res.state.url.split('/').length;
        this.loadComponent(res.state.url.split('/')[1]);
        if (urlLength > 2) {
          this.ts.setValue(true, 'sidebar-collapse', 'layout-navigation-collapse');
        } else {
          // this.loadTreeComponent(res.state.url.split('/')[1]);
        }
      }
    );

    //  sedding the resize event, for AdminLTE to place the height

    // define here your own links menu structure
    const baseLinks = [
      {
        icon: 'users',
        link: ['/resources'],
        title: ' Resources',
        dropdown: false,
      },
      {
        icon: 'location-arrow',
        link: ['/strategies'],
        title: ' Strategy',
        dropdown: false,
      },
      {
        icon: 'calendar',
        link: ['/epics'],
        title: ' Roadmap',
        dropdown: true,
        children: [
          { icon: 'calendar', link: '/epic-planning', title: 'Epics Planning'},
        ],
      },
      {
        icon: 'list',
        link: ['/features'],
        title: ' Features',
        dropdown: false,
      },
    ];

    this.mylinks = baseLinks;

  }

  public loadComponent(url: string) {
    console.log('switch', url);
    const viewContainerRef = this.menuHost.viewContainerRef;

    let componentFactory;
    switch (url) {

      case 'epic-planning':
      this.ts.setValue(false, 'sidebar-collapse', 'layout-navigation-collapse');
      componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        EpicTimeboxesMenuComponent
      );
      break;

    }
    if (componentFactory) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
    }
  }

  public ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
