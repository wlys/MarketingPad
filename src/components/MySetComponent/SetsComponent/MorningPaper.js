'use strict';
var React = require('react-native');

var {View,
    Text,
    Component
    } = React;

var DetailHeader = require('./DetailHeader');

var MorningPaper = React.createClass({
    render(){
        return(
            <View>
                <DetailHeader title='晨会一页纸' navigator={this.props.navigator}  mainScreen={this.props.mainScreen}  />
                <Text>Calculator正在开发中... </Text>
            </View>
        );
    }
})
module.exports=MorningPaper;

