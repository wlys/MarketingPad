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
    } = React;

var FinancialHome=require('./FinancialHome');

var index =React.createClass({
    render() {
        return (

            <FinancialHome
                navigator={this.props.navigator}/>

        );
    },
});
module.exports =index;