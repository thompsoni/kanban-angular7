import { ContentChild, Component, Directive, AfterContentInit, Input } from '@angular/core';



@Component({
    selector: 'ui-box-header',
    template: `<ng-content></ng-content>`
})
export class UIBoxHeaderComponent {
}

@Component({
    selector: 'ui-box-actions',
    template: `<ng-content></ng-content>`
})
export class UIBoxActionsComponent {
}


@Component({
    selector: 'ui-box-footer',
    template: `<ng-content></ng-content>`
})
export class UIBoxFooterComponent {
}

@Component({
    selector: 'ui-box',
    templateUrl: './ui-box.component.html'
})
export class UIBoxComponent implements AfterContentInit {
    @Input() public class: string;
    @Input() public ngClass: any;
    @Input() public noPadding = false;
    @Input() public withBorder = true;
    @Input() public loading = false;
    @ContentChild(UIBoxHeaderComponent) private header: UIBoxHeaderComponent;
    @ContentChild(UIBoxActionsComponent) private actions: UIBoxActionsComponent;
    @ContentChild(UIBoxFooterComponent) private footer: UIBoxFooterComponent;
    public showHeader = false;
    public showActions = false;
    public showFooter = false;

    public ngAfterContentInit() {
        this.showHeader = this.header != null;
        this.showActions = this.actions != null;
        this.showFooter = this.footer != null;
    }
}
