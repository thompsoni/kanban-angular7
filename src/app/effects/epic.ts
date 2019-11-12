import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { EpicService } from '../services/epic.service';
import * as epicActions from '../actions/epic';
import {
    ResponseError,
    Response,
    ListEpicsResponse,
} from '../models/a360.dtos';
import {
    catchError,
    map,
    switchMap,
} from 'rxjs/operators';


@Injectable()
export class EpicEffects {

    @Effect()
    public listEpics$: Observable<Action> = this.actions$
    .ofType<epicActions.GetEpicsAction>(
        epicActions.EpicActionType.GET_EPICS
    )
    .pipe(
        switchMap( () => {
            return this.epicService.list().pipe(
                map( (response: ListEpicsResponse) => {
                    return new epicActions.GetEpicsCompleteAction(response.results);
                }),
                catchError( (err: Response) => {
                    return of( new epicActions.GetEpicsErrorAction(err.responseStatus) );
                })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private epicService: EpicService,
    ) {}
}
