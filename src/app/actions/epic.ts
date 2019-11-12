import { Action } from '@ngrx/store';
import {
    ResponseError,
    IdAndNamePairDto,
    EpicDto,
    ResponseStatus,
} from '../models/a360.dtos';

export enum EpicActionType {
    GET_EPICS           =       '[Epic] GET Epics',
    GET_EPICS_COMPLETE  =       '[Epic] GET Epics Complete',
    GET_EPICS_ERROR     =       '[Epic] GET Epics Error',

    UPDATE_RESOURCE           =       '[Epic] UPDATE Epic',
    UPDATE_RESOURCE_COMPLETE  =       '[Epic] UPDATE Epic Complete',
    UPDATE_RESOURCE_ERROR     =       '[Epic] UPDATE Epic Error',

    // select epic to filter for feature grid
    SELECT_EPIC           =       '[Strategy] Feature SELECT Epic',
}

// GET EPICS
export class GetEpicsAction implements Action {
  public readonly type = EpicActionType.GET_EPICS;
  constructor() {}
}

export class GetEpicsCompleteAction implements Action {
  public readonly type = EpicActionType.GET_EPICS_COMPLETE;
  constructor( public payload: EpicDto[] ) {}
}

export class GetEpicsErrorAction implements Action {
  public readonly type = EpicActionType.GET_EPICS_ERROR;
  constructor( public payload: ResponseStatus ) {}
}

export class SelectEpicAction implements Action {
  readonly type = EpicActionType.SELECT_EPIC;
  constructor ( public payload: number ) {}
}

export type EpicAction
  =
  | GetEpicsAction
  | GetEpicsCompleteAction
  | GetEpicsErrorAction
  | SelectEpicAction
  ;
