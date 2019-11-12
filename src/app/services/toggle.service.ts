import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators';

export interface ToggleHashMap {
  [key: string]: BehaviorSubject<boolean>;
}
export interface ToggleNamespace {
  [key: string]: ToggleHashMap;
}

@Injectable()
export class ToggleService {
  private static readonly DEFAULT_NAMESPACE: string = 'TOGGLE_SERVICE_DEFAULT_NAMESPACE';
  public namespaces: ToggleNamespace;

  public constructor(private router: Router) {
    this.namespaces = {};
    router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.resetNamespace(ToggleService.DEFAULT_NAMESPACE);
      });
  }

  public toggle(
    toggleKey: string,
    namespace: string = ToggleService.DEFAULT_NAMESPACE
  ): void {
    this.setValue(!this.getValue(toggleKey, namespace), toggleKey, namespace);
  }

  public setValue(
    value: boolean,
    toggleKey: string,
    namespace: string = ToggleService.DEFAULT_NAMESPACE
  ): void {
    if (this.namespaces[namespace] == null) {
      this.namespaces[namespace] = {};
    }
    this.resetNamespace(namespace);

    if (this.namespaces[namespace][toggleKey] == null) {
      this.namespaces[namespace][toggleKey] = new BehaviorSubject(value);
    } else {
      this.namespaces[namespace][toggleKey].next(value);
    }
  }

  public getValue(
    toggleKey: string,
    namespace: string = ToggleService.DEFAULT_NAMESPACE
  ): boolean {
    if (this.namespaces[namespace] == null) {
      this.namespaces[namespace] = {};
    }

    if (this.namespaces[namespace][toggleKey] == null) {
      this.namespaces[namespace][toggleKey] = new BehaviorSubject(false);
    }

    return this.namespaces[namespace][toggleKey].getValue();
  }

  public getObservable(
    toggleKey: string,
    namespace: string = ToggleService.DEFAULT_NAMESPACE
  ): Observable<boolean> {
    if (this.namespaces[namespace] == null) {
      this.namespaces[namespace] = {};
    }

    if (this.namespaces[namespace][toggleKey] == null) {
      this.namespaces[namespace][toggleKey] = new BehaviorSubject(false);
    }

    return this.namespaces[namespace][toggleKey].asObservable();
  }

  public reset(): void {
    Object.keys(this.namespaces).map(namespace => {
      this.resetNamespace(namespace);
    });
  }

  public resetNamespace(namespace: string): void {
    if (this.namespaces[namespace] == null) {
      return;
    }

    Object.keys(this.namespaces[namespace]).map(key => {
      this.namespaces[namespace][key].next(false);
    });
  }
}
