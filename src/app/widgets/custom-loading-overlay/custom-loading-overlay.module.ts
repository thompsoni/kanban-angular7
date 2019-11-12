import { NgModule } from '@angular/core';
import { CustomLoadingOverlayComponent } from './custom-loading-overlay.component';

@NgModule({
  exports: [
    CustomLoadingOverlayComponent,
  ],
  declarations: [
    CustomLoadingOverlayComponent
  ]
})
export class CustomLoadingOverlayModule {}
