import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { ActionsSubject, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GrowlService, MessageTypes } from '../../services/growl.service';
import { filter, takeUntil, take, withLatestFrom } from 'rxjs/operators';
import { ColDef, GridApi, GridReadyEvent, ICellRendererParams, CellClickedEvent } from 'ag-grid';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EpicService } from '../../services/epic.service';
import {
  EpicDto,
  EpicTimeboxCardDto
} from '../../models/a360.dtos';
import { CustomLoadingOverlayComponent } from '../../widgets/custom-loading-overlay/custom-loading-overlay.component';
import { CustomNoRowsOverlayComponent } from '../../widgets/custom-no-rows-overlay/custom-no-rows-overlay.component';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'epic-timeboxes',
  templateUrl: './epic-timeboxes.component.html',
  styleUrls: ['./epic-timeboxes.less'],
  encapsulation: ViewEncapsulation.None
})
export class EpicTimeboxesComponent implements OnInit, OnDestroy, AfterViewInit {
  componentDestroyed$: Subject<boolean> = new Subject();

  public columnDefs: ColDef[] = [];

  public form: FormGroup;
  public epicData: EpicDto[] = [];
  private epicGridApi: GridApi;
  public frameworkComponents;
  public loadingOverlayComponent;
  public noRowsOverlayComponent;
  public selectedEpic: EpicDto;
  public Math = Math;

  public col1: any[] = [];
  public col2: any[] = [];
  public col3: any[] = [];
  public col4: any[] = [];
  public toggleCol: boolean[] = [false, false, false, false];
  public epicBacklog: EpicTimeboxCardDto[] = [
    {
      epic: {
        id: 1,
        name: 'Create Theme',
        description: 'task description',
        outcomes: 'outcomes',
        businessCaseVersion: 123,
        strategicTheme: { id: 1, name: 'theme' },
        type: { id: 1, name: 'type' },
        state: { id: 'Approved', name: 'type' },
        status: { id: 'Green', name: 'type' },
        effort: { id: 'L', name: 'type', weight: 0 },
        realizedMonetaryBenefit: 1,
        realizedBenefits: 'benefits',
        link: 'link',
        owner: null,
        valueEstimate: 1,
        durationEstimate: 5,
        rank: 1,
        completeness: 1,
      },
      businessCase: {
        id: 1,
        epic: { id: 1, name: 'epic' },
        version: 1,
        costEstimate: 12,
        monetaryBenefit: 123,
        owner: null,
        analysisSummary: 'analysis',
        impactToStrategicGoals: 'goals',
        benefitsAndFinancialImpact: 'benefits',
        riskAndReductions: 'risks',
      }
    },
    {
      epic: {
        id: 2,
        name: 'Create Backend',
        description: 'task description',
        outcomes: 'outcomes',
        businessCaseVersion: 123,
        strategicTheme: { id: 1, name: 'theme' },
        type: { id: 1, name: 'type' },
        state: { id: 'Approved', name: 'type' },
        status: { id: 'Green', name: 'type' },
        effort: { id: 'L', name: 'type', weight: 0 },
        realizedMonetaryBenefit: 1,
        realizedBenefits: 'benefits',
        link: 'link',
        owner: null,
        valueEstimate: 1,
        durationEstimate: 5,
        rank: 2,
        completeness: 1,
      },
      businessCase: {
        id: 1,
        epic: { id: 1, name: 'epic' },
        version: 1,
        costEstimate: 12,
        monetaryBenefit: 123,
        owner: null,
        analysisSummary: 'analysis',
        impactToStrategicGoals: 'goals',
        benefitsAndFinancialImpact: 'benefits',
        riskAndReductions: 'risks',
      }
    },
    {
      epic: {
        id: 3,
        name: 'Services',
        description: 'task description',
        outcomes: 'outcomes',
        businessCaseVersion: 123,
        strategicTheme: { id: 1, name: 'theme' },
        type: { id: 1, name: 'type' },
        state: { id: 'Approved', name: 'type' },
        status: { id: 'Red', name: 'type' },
        effort: { id: 'S', name: 'type', weight: 0 },
        realizedMonetaryBenefit: 1,
        realizedBenefits: 'benefits',
        link: 'link',
        owner: null,
        valueEstimate: 1,
        durationEstimate: 5,
        rank: 3,
        completeness: 1,
      },
      businessCase: {
        id: 1,
        epic: { id: 1, name: 'epic' },
        version: 1,
        costEstimate: 12,
        monetaryBenefit: 123,
        owner: null,
        analysisSummary: 'analysis',
        impactToStrategicGoals: 'goals',
        benefitsAndFinancialImpact: 'benefits',
        riskAndReductions: 'risks',
      }
    },
  ];
  public mouseInBoard = false;

  constructor(
    private breadServ: BreadcrumbService,
    private growlService: GrowlService,
    private formBuilder: FormBuilder,
    public chRef: ChangeDetectorRef,
    public epicService: EpicService,
    public ts: ToggleService,
  ) {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
    });

    this.frameworkComponents = {
        customLoadingOverlay: CustomLoadingOverlayComponent,
        customNoRowsOverlay: CustomNoRowsOverlayComponent
    };
    this.loadingOverlayComponent = 'customLoadingOverlay';
    this.noRowsOverlayComponent = 'customNoRowsOverlay';

    this.loadTimeboxes();
  } // constructor

  public ngOnInit() {

    // set loader
    this.ts.setValue(true, 'epic-grid-overlay', 'epic-grid-overlay');
  }

  public ngAfterViewInit() {
  }

  public ngOnDestroy() {
    // removing the header
    this.breadServ.clear();

    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  private onDrag(event) {
  }

  private onDrop(event) {
  }

  private onOver(event) {
  }

  public log(event) {
  }

  public findPrevRank(epicId: number): number {
    for ( let i = 0; i < this.col1.length; i++ ) {
      if ( this.col1[i].id === epicId ) {
        if ( i > 0 ) {
          return this.col1[i - 1].value.epic.rank;
        } else {
          return 0;
        }
      }
    }
    for ( let i = 0; i < this.col2.length; i++ ) {
      if ( this.col2[i].id === epicId ) {
        if ( i > 0 ) {
          return this.col2[i - 1].value.epic.rank;
        } else {
          return 0;
        }
      }
    }
    for ( let i = 0; i < this.col3.length; i++ ) {
      if ( this.col3[i].id === epicId ) {
        if ( i > 0 ) {
          return this.col3[i - 1].value.epic.rank;
        } else {
          return 0;
        }
      }
    }
    for ( let i = 0; i < this.col4.length; i++ ) {
      if ( this.col4[i].id === epicId ) {
        if ( i > 0 ) {
          return this.col4[i - 1].value.epic.rank;
        } else {
          return 0;
        }
      }
    }
    return null;
  }

  // find timebox column where the epic is
  public findColumnId(epicId): number {
    for ( let i = 0; i < this.col1.length; i++ ) {
      if ( this.col1[i].id === epicId ) {
        return 0;
      }
    }
    for ( let i = 0; i < this.col2.length; i++ ) {
      if ( this.col2[i].id === epicId ) {
        return 1;
      }
    }
    for ( let i = 0; i < this.col3.length; i++ ) {
      if ( this.col3[i].id === epicId ) {
        return 2;
      }
    }
    for ( let i = 0; i < this.col4.length; i++ ) {
      if ( this.col4[i].id === epicId ) {
        return 3;
      }
    }
    return null;
  }

  public toggleColumn(colIndex: number) {
    let colClosedCount = 0;
    this.toggleCol.forEach( col => {
      if ( col === true ) {
        colClosedCount++;
      }
    });
    if ( colIndex >= 0 && colIndex < this.toggleCol.length ) {

      if ( this.toggleCol[colIndex] === false ) {
        if ( colClosedCount < 3 ) {
          this.toggleCol[colIndex] = !this.toggleCol[colIndex];
        }
      } else {
        this.toggleCol[colIndex] = !this.toggleCol[colIndex];
      }
    }
  }

  public loadTimeboxes() {
    this.col1 = [];
    this.col2 = [];
    this.col3 = [];
    this.col4 = [];
    this.epicBacklog.forEach( epic => {
      this.col1.push( { id: epic.epic.id, value: epic } );
    });
    this.col1.sort( (a, b) => {
      if ( a.value.epic.rank > b.value.epic.rank ) {
        return -1;
      } else { return 1; }
    });
  }
}
