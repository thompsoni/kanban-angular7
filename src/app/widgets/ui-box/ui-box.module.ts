import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIBoxActionsComponent, UIBoxHeaderComponent, UIBoxComponent, UIBoxFooterComponent } from './ui-box.component';


@NgModule({
    // within module
    declarations: [
        UIBoxActionsComponent,
        UIBoxHeaderComponent,
        UIBoxFooterComponent,
        UIBoxComponent,
    ],
    // outside module
    exports: [
        UIBoxActionsComponent,
        UIBoxHeaderComponent,
        UIBoxFooterComponent,
        UIBoxComponent,
    ],
    // dependencies
    imports: [
        CommonModule
    ],
})
export class UIBoxModule {}
