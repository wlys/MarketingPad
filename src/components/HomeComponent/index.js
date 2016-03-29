'use strict';
var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    Component,
    BackAndroid,
    } = React;

var Home = require('./home');
var MorningMeeting = require('./MorningMeeting');
//var MainScreen = require('./../../views/MainScreen');
//var Cat = require('./Cat')

var index =React.createClass({
    _configureScene () {
    return Navigator.SceneConfigs.HorizontalSwipeJump;
    },

    _renderScene (router, navigator) {
        var Component = null;
        this._navigator = navigator;
        switch (router.name) {
            case "Home":
                Component = Home;
                break;
            case "MorningMeeting":
                Component = MorningMeeting;
                break;
            default: //default view
                Component = Home;
        }
        return <Component navigator={navigator} router={router} />;
    },


    render() {
        return (
            <Navigator
                initialRoute={{name: 'Home'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}/>
        );
    }

});
module.exports =index;