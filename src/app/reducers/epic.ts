import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
    EpicDto,
} from '../models/a360.dtos';
import * as epicActions from '../actions/epic';

export interface State extends EntityState<EpicDto> {
    // additional entities state properties
    selectedId: number | null;
}

export const adapter: EntityAdapter<EpicDto> = createEntityAdapter<EpicDto>({
});

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedId: null,
});

export function reducer(
    state = initialState,
    action: epicActions.EpicAction
): State {

    switch (action.type) {

        case epicActions.EpicActionType.SELECT_EPIC: {
            return { ...state, selectedId: action.payload };
        }

        default: {
            return state;
        }
    }
}

export const getSelectedId = (state: State) => state.selectedId;

