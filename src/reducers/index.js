
'use strict';

/*import auth from './auth/authReducer';
import device from './device/deviceReducer';
import global from './global/globalReducer';
import profile from './profile/profileReducer';*/
import lobby from './lobby/LobbyMgrReducers';
import MainScreen from './MainScreen/MainScreenReducers';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
lobby,MainScreen

});

export default rootReducer;
