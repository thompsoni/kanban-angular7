import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router, NavigationEnd, UrlSegment } from '@angular/router';
import { ToggleService } from '../../services/toggle.service';
import { takeUntil, take, filter } from 'rxjs/operators';
import { Store, ActionsSubject } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable, Subject } from 'rxjs';
import { TreeNode } from 'primeng/primeng';
import * as fromRoot from '../../reducers';
import * as authActions from '../../actions/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-aside',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-aside.component.html',
  styleUrls: ['./menu-aside.component.css'],
})
export class MenuAsideComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public showMenu: boolean;
  @Input() public enableEditFolder: boolean;
  @Input() public showDomain: boolean;
  @Output() public treeSelect: EventEmitter<number> = new EventEmitter<number>();
  @Output() public newFolder: EventEmitter<number> = new EventEmitter<number>();
  @Output() public newDomain: EventEmitter<number> = new EventEmitter<number>();
  @Output() public editFolder: EventEmitter<number> = new EventEmitter<number>();
  @Output() public editDomain: EventEmitter<number> = new EventEmitter<number>();
  @Output() public editRoadmap: EventEmitter<number> = new EventEmitter<number>();

  private onDestroy = new Subject();
  public currentUser: any;
  public online: Observable<boolean>;
  public treeDataCount = 0;
  public search: string;
  public toggleVal = false;
  public treeLoading = false;
  public filterTimeoutId: any;
  public module: string;
  public selectedFile: TreeNode;
  public isAdmin: boolean;

  constructor(
    public router: Router,
    public ts: ToggleService,
    public chRef: ChangeDetectorRef,
    private store: Store<State>,
    private authService: AuthService,
    private actionsSubject: ActionsSubject,
  ) {
  }

  public ngOnInit() {
    this.ts.getObservable('sidebar-collapse', 'layout-navigation-collapse')
    .pipe( takeUntil(this.onDestroy) ).subscribe(res => {
      this.toggleVal = res;
      this.chRef.markForCheck();
    });

    this.ts.getObservable('loading-tree', 'loading-tree-overlay')
    .pipe( takeUntil(this.onDestroy) ).subscribe(res => {
      this.treeLoading = res;
    });

    this.store.select( fromRoot.getAuthUser )
    .pipe( takeUntil(this.onDestroy) )
    .subscribe( res => {
      this.currentUser = res;
    });

    // listen to actions example
    this.actionsSubject.pipe(filter(action => action.type === authActions.LOGOUT_COMPLETE))
    .pipe( takeUntil(this.onDestroy) )
    .subscribe(res => {
      this.router.navigate(['login']);
    });

  }

  public addNewFolder() {
    return this.newFolder.emit();
  }

  public addNewDomain() {
    return this.newDomain.emit();
  }

  public ngOnChanges(changes: SimpleChanges) {
  }


  public selectFN(node) {
    console.log(node.data);
    this.ts.setValue(true, 'loading-overlay', 'loading-grid-overlay');
    return this.treeSelect.emit(node.data);
  }

  public logout() {
    this.store.dispatch( new authActions.LogoutAction() );
    /*this.authService.logoutArchive()
    .pipe( take(1) )
    .subscribe( res => {
      console.log(res);
    });*/
  }

  public ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
    this.chRef.detach();
  }
}
