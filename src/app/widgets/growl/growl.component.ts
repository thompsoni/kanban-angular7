import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { GrowlService } from '../../services/growl.service';
import { Message } from 'primeng/components/common/message';
import { Observable } from 'rxjs/Observable';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-growl',
  template: `<p-growl baseZIndex="999999" [value]="messages$ | async" (onClose)="closing($event)"></p-growl>`
})
export class GrowlComponent implements OnInit {
  public messages$: Observable<Message[]>;
  public constructor( private growlService: GrowlService ) {
  }

  public ngOnInit() {
      this.messages$ = this.growlService.messages;
  }

  public closing( messageEvent: any ) {
    this.growlService.close( messageEvent.message.id );
  }
}
