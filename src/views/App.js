
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
            case "Home":
                return <MainScreen initialTab="Home" />
            case "LobbyMgr":
                return <MainScreen initialTab="LobbyMgr" />
            case "Fiancail":
                return <MainScreen initial Tab="Fiancial"/>
            case "Settings":
                return <MainScreen initial Tab="Settings"/>
            default: //default view
                return <MainScreen  initialTab="LobbyMgr" />
        }

    },

    render: function() {
        return (
            <Navigator
                initialRoute={{name: 'Home'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}/>
        );
    }

});

module.exports =App;
