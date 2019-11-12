import { Injectable, Input } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { UUID } from 'angular2-uuid';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

function asObservable<T>(subject: Subject<T>): Observable<T> {
  return new Observable(fn => subject.subscribe(fn));
}

export enum MessageTypes {
  SUCCESS = 'success',
  INFORMATION = 'info',
  WARNING = 'warn',
  ERROR = 'error',
}

@Injectable()
export class GrowlService {
  /* tslint:disable: variable-name */
  private _messages: BehaviorSubject<Message[]> = new BehaviorSubject([]);
  /* tslint:enable: variable-name */

  get messages(): Observable<Message[]> {
    return asObservable(this._messages);
  }

  public showMessage(message: Message) {
    this._messages.next([...this._messages.getValue(), message]);
  }

  public show(
    detail: string,
    summary: string,
    severity: MessageTypes = MessageTypes.INFORMATION,
    id: string = null
  ) {
    if (id === null) {
      id = UUID.UUID();
    }

    this.showMessage({
      severity: severity.toString(),
      summary: summary,
      detail: detail,
      id: id,
    });
  }

  public showSuccess(detail: string, summary: string, id: string = null) {
    this.show(detail, summary, MessageTypes.SUCCESS, id);
  }

  public showInfo(detail: string, summary: string, id: string = null) {
    this.show(detail, summary, MessageTypes.INFORMATION, id);
  }

  public showWarning(detail: string, summary: string, id: string = null) {
    this.show(detail, summary, MessageTypes.WARNING, id);
  }

  public showError(detail: string, summary: string, id: string = null) {
    this.show(detail, summary, MessageTypes.ERROR, id);
  }

  public close(id: string) {
    const newVal = this._messages.getValue().filter(item => item.id !== id);

    console.log(newVal, id);
    this._messages.next(newVal);
  }

  public clear() {
    this._messages.next([]);
  }
}
