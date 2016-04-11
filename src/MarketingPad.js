/**
 * Created by liu on 2016/4/5.
 */
/**
 * Created by seastar on 16/3/8.
 */
'use strict';
import React, {
    AppRegistry,
    Platform,
    } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers/index';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);
import MainScreenContainer from './containers/MainScreenContainer';
export default function native(platform) {

    const MarketingPad = React.createClass ({
        render() {
            if (Platform.OS === 'android') {
                console.log(platform)
                return (
                    <Provider store={store}>

                        <MainScreenContainer/>

                    </Provider>

                );

            }
            else {

            }
        }
    })

    AppRegistry.registerComponent('MarketingPad', () => MarketingPad);

}


