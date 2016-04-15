'use strict';

import React, {
    Component,
    ToolbarAndroid,
    Navigator,
    StyleSheet,
    View,
} from 'react-native';

import SetHome from './SetHome'
import MyInfo from './SetsComponent/MyInfo.js'
import Calculator from './SetsComponent/Calculator.js'
import MorningPaper from './SetsComponent/MorningPaper.js'
import HelpMe from './SetsComponent/HelpMe.js'

var index =React.createClass({

    _configureScene () {
        return Navigator.SceneConfigs.PushFromRight;
    },

    _renderScene (router, navigator) {
        var Component = null;
        this._navigator = navigator;
        switch (router.name) {
            case "SetHome":
                Component = SetHome;
                break;
            case "MyInfo":
                Component = MyInfo;
                break;
            case "Calculator":
                Component = Calculator;
                break;
            case "MorningPaper":
                Component = MorningPaper;
                break;
            case "HelpMe":
                Component = HelpMe;
                break;
            default: //default view
                Component = SetHome;
        }
        return <Component navigator={navigator} router={router} mainScreen={this.props.mainScreen}/>;
    },


    render() {
        return (
            <Navigator
                initialRoute={{name: 'SetHome'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}/>
        );
    }

});
module.exports =index;