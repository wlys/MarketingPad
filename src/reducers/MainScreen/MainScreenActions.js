/**
 * Created by liu on 2016/4/7.
 */
import * as types from './MainScreenStates';
export function showTabBar(show) {
    return {
        type: types.SHOW_TABBAR,
        ShowTabBar: show
    };
}