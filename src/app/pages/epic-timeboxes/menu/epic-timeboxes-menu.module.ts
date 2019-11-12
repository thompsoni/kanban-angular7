import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    // within module
    declarations: [
    ],
    // outside module
    exports: [
    ],
    // dependencies
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class EpicTimeboxesMenuModule {}
