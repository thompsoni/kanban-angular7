import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
    // within module
    declarations: [
        ProgressBarComponent,
    ],
    // outside module
    exports: [
        ProgressBarComponent,
    ],
    // dependencies
    imports: [ CommonModule ],
})
export class ProgressBarModule {}
