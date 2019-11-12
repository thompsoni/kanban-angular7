import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { ToggleService } from '../../services/toggle.service';

@Component( {
    /* tslint:disable */
    selector: '.tasksBox',
    /* tslint:enable */
    styleUrls: ['./tasks-box.component.css'],
    templateUrl: './tasks-box.component.html'
})
export class TasksBoxComponent implements OnInit {

    public messages: Message[];
    public tasksLength: {} = { 0: '9' };
    @Input() public user;

    constructor(public ts: ToggleService) {
        // TODO
    }

    public ngOnInit() {
        // TODO
    }

}
