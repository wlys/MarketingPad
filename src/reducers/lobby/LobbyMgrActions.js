/**
 * Created by liu on 2016/3/30.
 */
import * as types from './LobbyMgrStates';
export function changeActiveTabStatus (activeNum) {
    return {
        type: types.CHG_ACTIVE_TAB,
        activeNum:activeNum
    }
}