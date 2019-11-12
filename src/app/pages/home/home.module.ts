import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    // within module
    declarations: [
        HomeComponent,
    ],
    // outside module
    exports: [
        HomeComponent,
    ],
    // dependencies
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgxChartsModule,
    ],
})
export class HomeModule {}
