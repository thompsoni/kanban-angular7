import { MenuHostDirective } from './menu-host.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
      // within module
      declarations: [
        MenuHostDirective,
      ],
      // outside module
      exports: [
        MenuHostDirective,
      ],
      // dependencies
      imports: [
          CommonModule,
      ],
  })

export class MenuHostModule {}
