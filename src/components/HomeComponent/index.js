'use strict';
var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    Component,
    BackAndroid,
    } = React;

var Home = require('./home');
var FundList = require('./FundList');
var MorningMeeting = require('./MorningMeeting');
var FundDetail = require('./FundDetail');
var Login = require('./login');

var index =React.createClass({

    _configureScene () {
    return Navigator.SceneConfigs.PushFromRight;
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
            case "FundList":
                Component = FundList;
                break;
            case "FundDetail":
                Component = FundDetail;
                break;
            case "Login":
                Component = Login;
                break;
            default: //default view
                Component = Home;
        }
        return <Component navigator={navigator} router={router} mainScreen={this.props.mainScreen}/>;
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