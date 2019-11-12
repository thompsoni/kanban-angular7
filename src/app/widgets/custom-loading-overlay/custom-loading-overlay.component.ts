import { Component } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'app-loading-overlay',
    template:
    `<div style="text-align: center">
    <div class="ag-overlay-loading-center" style=" margin-left: 25%; width: 50%; border-radius: 0; background-color: #1a9ad0; height: 9%">
    <small style="color: white">Loading...</small>
    </div>
    </div>`
})
export class CustomLoadingOverlayComponent implements ILoadingOverlayAngularComp {
    public getGui;
    agInit(): void {}
}
