import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'app-no-rows-overlay',
    template:
    `<div style="text-align: center">
    <div class="ag-overlay-loading-center" style=" margin-left: 25%; width: 50%; border-radius: 0; background-color: #1a9ad0; height: 9%">
    <small style="color: white">No rows</small>
    </div>
    </div>`
})
export class CustomNoRowsOverlayComponent implements INoRowsOverlayAngularComp {
    public getGui;
    agInit(): void {}
}
