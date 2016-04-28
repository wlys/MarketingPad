/**
 * Created by liu on 2016/3/30.
 */
import * as types from './LobbyMgrStates';
const initialState = {activityTab: 0};
export default function LobbyMgrReducers(state = initialState, action={}) {
    switch (action.type) {
        case types.CHG_ACTIVE_TAB:
            return ({

                ...state,
                activityTab: action.activeNum
            })
        default:
            return state
    }
}
