import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from '../../services/messages.service';
import { LoggerService } from '../../services/logger.service';
import { Message } from '../../models/message';
import { ToggleService } from '../../services/toggle.service';

@Component( {
    /* tslint:disable */
    selector: '.messagesBox',
    /* tslint:enable */
    styleUrls: ['./messages-box.component.css'],
    templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
    // Declaring the variable for binding with initial value
    public messages: Message[];
    public msgCount = 0;

    constructor(
        private msgServ: MessagesService,
        private logger: LoggerService,
        public ts: ToggleService
    ) {
        this.messages = [];
    }

    public ngOnInit() {
        // Every incoming message changes entire local message Array.
        this.msgServ.messages.subscribe(( msg: Message[] ) => {
            this.logger.log( 'MsgBox', null, null );
            this.messages = msg;
            this.msgCount = this.messages.length;
        });
    }
}
