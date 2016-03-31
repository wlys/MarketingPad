/**
 * Created by liu on 2016/3/11.
 */
'use strict';
var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    Component,
    BackAndroid,
    Text,
    } = React;

var FinancialHome=require('./FinancialHome');
var FundDetail=require('./FundDetail');
var Test=require('./Test');
var index =React.createClass({
    _configureScene () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    _renderScene (router, navigator) {
        var Component = null;
        this._navigator = navigator;
        switch (router.name) {
            case "FinancialHome":
                Component = FinancialHome;
                break;
            case "FundDetail":
                Component = FundDetail;
                break;
            default: //default view
                Component = FinancialHome;
        }
        return <Component navigator={navigator} router={router} mainScreen={this.props.mainScreen}/>
    },


    render() {
        return (
            <Navigator
                initialRoute={{name: 'FinancialHome'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}/>
        );
    },
});
module.exports =index;