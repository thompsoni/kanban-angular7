import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class BreadcrumbService {
  public current: ReplaySubject<any>;
  private initialData: Object = {
    description: '',
    display: false,
    header : '',

    levels: [
      {
        icon: 'clock-o',
        link: ['/'],
        title: 'Default',
        queryParams: {}
      }
    ]
  };
  private levels: any[] = [
  ];

  constructor() {
    this.current = new ReplaySubject(1);
    this.clear();
  }

  public set(data: any) {
    this.current.next(data);
  }

  public addLevel(data: any) {

    if ( this.levels.length > 0 ) {
      if ( data.level.link[0] !== this.levels[ this.levels.length - 1 ].link[0] ) {
        this.levels.push(data.level);
      }
    } else {
      this.levels.push(data.level);
    }

    if ( this.levels.length > 3 ) {
      this.levels.shift();
    }

    data.levels = this.levels;
    this.current.next(data);
  }

  public clear() {
    this.set(this.initialData);
  }

}
