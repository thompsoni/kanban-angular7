import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

const ANIMATION_LENGTH_SECONDS = 0.2;

@Component({
    styles: [`
    :host {
        position: relative;
        z-index: 222000;
    }
    `, `
    .pace {
        -webkit-pointer-events: none;
        pointer-events: none;

        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        -webkit-transform: translate3d(0, -50px, 0);
        -ms-transform: translate3d(0, -50px, 0);
        transform: translate3d(0, -50px, 0);
        transition: transform 0.200s ease-out;
      }

      .pace.pace-active {
        -webkit-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      .pace .pace-progress {
        display: block;
        position: fixed;
        z-index: 2000;
        top: 0;
        right: 100%;
        width: 100%;
        height: 3px;
        background: #1a9ad0;
        background: linear-gradient(90deg, #1a9ad0 0%, #1fb6f2 96%, #fff 99%);

        pointer-events: none;
      }

      .pace.pace-active .pace-progress {
        transition: transform ${ANIMATION_LENGTH_SECONDS}s ease-out;
      }

      .pace .pace-activity {
        display: block;
        position: fixed;
        z-index: 2000;
        top: 15px;
        right: 50%;
        width: 14px;
        height: 14px;
        border: solid 2px transparent;
        border-top-color: #fff;
        border-left-color: #fff;
        border-radius: 10px;
        -webkit-animation: pace-spinner 400ms linear infinite;
        -moz-animation: pace-spinner 400ms linear infinite;
        -ms-animation: pace-spinner 400ms linear infinite;
        -o-animation: pace-spinner 400ms linear infinite;
        animation: pace-spinner 400ms linear infinite;
    }

    @keyframes pace-spinner{
        0%{
            transform:rotate(0deg);
        }
        100%{
            transform:rotate(360deg);
        }
    }
    `],
    selector: 'progress-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="pace" [ngClass]="{'pace-active': show}">
        <div
            class="pace-progress"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            [attr.aria-valuenow]="_value"
            [ngStyle]="{'transform': 'translate3d('+_value+'%, 0px, 0px)'}">
            <div class="pace-progress-inner"></div>
        </div>
        <div class="pace-activity"></div>
    </div>
    `,
})
export class ProgressBarComponent implements OnChanges {


    /**
     * Timeout for hiding & set zero of progress bar after completion
     */
    private timeout: any;

    /**
     * Shows & hides progress-bar
     */
    public show = false;

    /**
     * Used for internal representation
     */
    public _value = 0;
    @Input() public value: Number = 0;

    public constructor(private chRef: ChangeDetectorRef) { }

    public ngOnChanges(changes: SimpleChanges ) {
        this._value = changes.value.currentValue;
        if ( changes.value.currentValue === 100) {
            this.timeout = setTimeout( () => {
                this.show = false;
                this._value = 0;
                this.chRef.markForCheck();
            },
            ANIMATION_LENGTH_SECONDS * 1000 + 100);
        } else if ( this.timeout ) {
            this.show = true;
            clearTimeout( this.timeout );
        }
    }
}
