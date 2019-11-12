import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { EpicService } from '../../../services/epic.service';
import { StrategicThemeDto, ResponseError } from '../../../models/a360.dtos';
import { take, takeUntil } from 'rxjs/operators';
import { ToggleService } from '../../../services/toggle.service';
import { Subject } from 'rxjs/Subject';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'epic-timeboxes-menu',
  templateUrl: `./epic-timeboxes-menu.component.html`,
  styleUrls: ['./epic-timeboxes-menu.less'],
})
export class EpicTimeboxesMenuComponent implements OnChanges, OnInit, OnDestroy {

  componentDestroyed$: Subject<boolean> = new Subject();
  public strategicThemes: StrategicThemeDto[] = [];
  public selectedStrategyId = -1;
  public menuCollapsed = false;

  constructor(
    private chRef: ChangeDetectorRef,
    private store: Store<fromRoot.State>,
    public ts: ToggleService,
  ) {
  }

  public ngOnInit() {

    this.ts.getObservable('sidebar-collapse', 'layout-navigation-collapse')
    .pipe( takeUntil(this.componentDestroyed$) )
    .subscribe( res => {
      console.log(res);
      this.menuCollapsed = res;
      this.chRef.markForCheck();
    });
  }

  public select(id: number) {
  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  public ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

}
