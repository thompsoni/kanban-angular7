import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/components/common/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EpicTimeboxesComponent } from './epic-timeboxes.component';
import { EpicTimeboxesRoutingModule } from './epic-timeboxes.routing.module';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { AgGridModule } from 'ag-grid-angular/main';
import { CustomLoadingOverlayComponent } from '../../widgets/custom-loading-overlay/custom-loading-overlay.component';
import { CustomNoRowsOverlayComponent } from '../../widgets/custom-no-rows-overlay/custom-no-rows-overlay.component';
import { CustomLoadingOverlayModule } from '../../widgets/custom-loading-overlay/custom-loading-overlay.module';
import { CustomNoRowsOverlayModule } from '../../widgets/custom-no-rows-overlay/custom-no-rows-overlay.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { DomChangeDirective } from './observer-directive';

@NgModule({
    // within module
    declarations: [
      EpicTimeboxesComponent,
      DomChangeDirective,
    ],
    // outside module
    exports: [
    ],
    // dependencies
    imports: [
        CommonModule,
        SharedModule,
        EpicTimeboxesRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TabViewModule,
        DialogModule,
        DropdownModule,
        AgGridModule.withComponents([CustomLoadingOverlayComponent, CustomNoRowsOverlayComponent]),
        CustomLoadingOverlayModule,
        CustomNoRowsOverlayModule,
        NgxChartsModule,
        NgxDnDModule,
    ],
})
export class EpicTimeboxesModule {}
