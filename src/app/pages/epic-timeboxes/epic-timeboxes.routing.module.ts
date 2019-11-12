import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpicTimeboxesComponent } from './epic-timeboxes.component';
import { ConfirmDeactivateGuard } from '../../services/guard.service';

const routes: Routes = [
  {path: '', component: EpicTimeboxesComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class EpicTimeboxesRoutingModule {
}
