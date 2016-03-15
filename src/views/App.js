/**
 * Created by seastar on 16/3/8.
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
} from 'react-native';

var MainScreen = require('./MainScreen');
//import FirstPageComponent from '../components/FirstPageComponent';

var App = React.createClass({

    _configureScene: function (route) {
        return Navigator.SceneConfigs.PushFromRight;
    },

    _renderScene: function (router, navigator) {
        var Component = null;
        //this._navigator = navigator;
        switch (router.name) {
            case "MainScreen":
                Component = MainScreen;
                break;
            default: //default view
                Component = Home;
        }

        return <Component navigator={navigator}/>
    },

    render: function() {
        //var defaultName = 'FirstPageComponent';
        //var defaultComponent = FirstPageComponent;
/*        <Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
            renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
        />*/

        return (
            <Navigator
                initialRoute={{name: 'MainScreen'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}/>
        );
    }

})

module.exports =App;
