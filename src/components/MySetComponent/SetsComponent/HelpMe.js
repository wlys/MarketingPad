'use strict';
var React = require('react-native');

var {
    Text,
    Component
    } = React;

var DetailHeader = require('./DetailHeader');

var HelpMe = React.createClass({
    render(){
        return(
            <View>
                <DetailHeader title='帮助' navigator={this.props.navigator} mainScreen={this.props.mainScreen}  />
                <Text>Calculator正在开发中... </Text>
            </View>
        );
    }
})
module.exports=HelpMe;

