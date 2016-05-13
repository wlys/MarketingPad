/**
 * Created by liu on 2016/3/30.
 */
import InitialState from './mySetInitialStates';
const {
    CHG_CAL_CHD_STATE,
    } = require('../../lib/constants').default;
const initialState = new InitialState;
export default function mySetReducers(state = initialState, action={}) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
    switch (action.type) {
        case CHG_CAL_CHD_STATE:
           return  state.set('calChdShow', !state.calChdShow);
        default:
            return state
    }
}
