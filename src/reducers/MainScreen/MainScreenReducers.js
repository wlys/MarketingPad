/**
 * Created by liu on 2016/4/7.
 */
import * as types from './MainScreenStates';
const initialState = {ShowTabBar: true};

export default function navigator(state = initialState, action={}) {
    switch (action.type) {
        case types.SHOW_TABBAR:
            return Object.assign({}, state, {
                ShowTabBar: action.ShowTabBar
            })
        default:
            return state
    }
}