'use strict';

var React = require('react-native');
var{
    AsyncStorage,
    Image,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    ToastAndroid,
    BackAndroid,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    }=React;

var globalStyles = require('../../styles/globalStyles');
var ScrollView_HEIGHT = globalStyles.WINDOW_HEIGHT- globalStyles.NAVBAR_HEIGHT - globalStyles.TABBAR_HEIGHT - 6*globalStyles.MARGIN_HEIGHT;

var HomeHeader = require('./HomeHeader');
var TopScreen=require('./TopScreen');
var Cat = require('./Cat');
var RecommendList=require('./RecommendList');
var Top5List=require('./Top5List');

var Login = require('./login');

var home =  React.createClass({

     //渲染头部
    _renderHeader() {
        var title = '中国农业银行';
        return (
            <HomeHeader navigator={this.props.navigator} title={title} mainScreen={this.props.mainScreen} />


        );
    },

    render() {
        return (

            <View style={{}}>

                {this._renderHeader()}


                <ScrollView style={{height:ScrollView_HEIGHT, backgroundColor:globalStyles.BACKGOUND_COLOR_MARGIN}} >

                    <TopScreen style={{flex:1}} />

                    <Cat navigator={this.props.navigator} />

                    <RecommendList navigator={this.props.navigator} />

                    <Top5List navigator={this.props.navigator} />

                </ScrollView>

            </View>
                //</DrawerLayoutAndroid>
        );
    }
});

var styles = StyleSheet.create({
});

module.exports = home;