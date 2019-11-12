import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';
import { ToggleService } from '../../services/toggle.service';

@Component( {
    /* tslint:disable */
    selector: '.notificationsBox',
    /* tslint:enable */
    styleUrls: ['./notification-box.component.css'],
    templateUrl: './notification-box.component.html'
})
export class NotificationBoxComponent implements OnInit {

    public messages: Message[];
    public notifLength: {} = {0: '10'};

    constructor(public ts: ToggleService) {
        // TODO
    }

    public ngOnInit() {
        // TODO
    }

}
