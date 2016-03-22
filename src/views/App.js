
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
    BackAndroid,
} from 'react-native';

var MainScreen = require('./MainScreen');

var App = React.createClass({

    _configureScene: function (route) {
        return Navigator.SceneConfigs.PushFromRight;
    },

    _renderScene: function (router, navigator) {
        var Component = null;
        this._navigator = navigator;
        switch (router.name) {
            case "MainScreen":
                return <MainScreen navigator={navigator} initialTab="home" />
            default: //default view
                return <MainScreen navigator={navigator} initialTab="manager" />
        }

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
//why use Navigator
        return (
            <Navigator
                initialRoute={{name: 'MainScreen'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}/>
        );
    }

})

module.exports =App;
