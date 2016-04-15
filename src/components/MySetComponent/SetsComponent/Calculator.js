'use strict';
var React = require('react-native');

var {
    View,
    Text,
    Component
    } = React;

var DetailHeader = require('./DetailHeader');

var Calculator = React.createClass({
    render(){
        return(
            <View>
                <DetailHeader title='计算器' navigator={this.props.navigator} mainScreen={this.props.mainScreen}  />
                <Text>Calculator正在开发中... </Text>
            </View>
        );
    }
})

module.exports=Calculator;

