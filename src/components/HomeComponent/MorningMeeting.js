'use strict';

var React = require('react-native');

var {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    Image,
    View,
    AlertIOS
    } = React;

var CatDetailHeader = require('./CatDetailHeader');

module.exports = React.createClass({
    render() {

        return (
            <View>
                <CatDetailHeader navigator={this.props.navigator} title="晨会一页纸" mainScreen={this.props.mainScreen} />
                <Text>MorningMeeting</Text>
            </View>
        );
    }


});