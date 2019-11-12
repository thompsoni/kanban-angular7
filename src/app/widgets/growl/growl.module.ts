import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { GrowlComponent } from './growl.component';
import { GrowlModule } from 'primeng/components/growl/growl';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
    // within module
    declarations: [
        GrowlComponent,
    ],
    // outside module
    exports: [
        GrowlComponent,
        GrowlModule,
    ],
    // dependencies
    imports: [
        CommonModule,
        RouterModule,
        GrowlModule,
    ],
})
export class UIGrowlModule {}

