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
    _tabSelectedEvent(){
        var router={name:'Login'};
        this.props.navigator.push(router);
    },
    render() {

        return (
            <View>
                <CatDetailHeader navigator={this.props.navigator} title="晨会一页纸" mainScreen={this.props.mainScreen} />

                <TouchableOpacity onPress={()=>this._tabSelectedEvent()}>
                    <Text>MorningMeeting</Text>
                </TouchableOpacity>
            </View>
        );
    }


});