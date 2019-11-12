/// <reference path="../node_modules/@types/node/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { bootloader, hmrModule  } from '@angularclass/hmr';
import {LicenseManager} from 'ag-grid-enterprise/main';
LicenseManager.setLicenseKey('BA_Group_MultiApp_1Devs26_September_2018__MTUzNzkxNjQwMDAwMA==8b0f36793482c625879a26f6c4b936b7');

if (environment.production) {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule)
    // use `hmrModule` or the "@angularclass/hmr-loader"
    .then((ngModuleRef: any ) => {
      // `module` global ref for webpackhmr
      // Don't run this in Prod
      if ( !environment.production && environment.hmr ) {
        return hmrModule(ngModuleRef, module);
      }
    });
}

bootloader(main);
