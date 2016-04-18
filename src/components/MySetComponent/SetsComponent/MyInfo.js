'use strict';
var React = require('react-native');

var {
    View,
    Text,
    Component
    } = React;

var DetailHeader = require('./DetailHeader');

var MyInfo = React.createClass({
    render(){
        return(
            <View>
                <DetailHeader title='个人信息' navigator={this.props.navigator} mainScreen={this.props.mainScreen}  />
                <Text>Calculator正在开发中... </Text>
            </View>
        );
    }
})

module.exports = MyInfo;

