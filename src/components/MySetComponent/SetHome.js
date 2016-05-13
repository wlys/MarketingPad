'use strict';

var React = require('react-native');
var {
    TouchableHighlight,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    ToolbarAndroid,
    Dimensions,
    Component,
    } = React;

var SetHomeHeader = require('./SetHomeHeader');
var { width, height, scale } = Dimensions.get('window');
var Calculator = require('./SetsComponent/Calculator');
var HelpMe = require('./SetsComponent/HelpMe');
var MenuItem = require('./SetsComponent/MenuItem');
var MyInfo = require('./SetsComponent/MyInfo');
var LogOut = require('./SetsComponent/LogOut');
var MorningPaper = require('./SetsComponent/MorningPaper');


var SetHome =  React.createClass({

    _tabSelectedEvent(name,title){
        var router ={name:name,title:title};
        this.props.navigator.push(router) ;
    },
    _call (){
        alert('tel:... 95599 ...');
    },
    //渲染头部
    _renderHeader() {
        var title = '个人中心';
        return (
            <SetHomeHeader navigator={this.props.navigator} title={title} mainScreen={this.props.mainScreen} />


        );
    },

    render() {
        return (

            <View style={{flex:1,backgroundColor:'#eeeeee'}}>
                <View style={{height:height-80}}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {this._renderHeader()}


                        <MenuItem
                            margin2Top='10'
                            title='个人信息'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            />
                        <MenuItem
                            title='晨会一页纸'
                            margin2Top='1'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            />

                        <MenuItem
                            margin2Top='10'
                            title='常用计算器'
                            showChildren={false}
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            >

                            <MenuItem
                                title='存款计算器'
                                margin2Top='3'
                                color='#dddddd'
                                icon_l={require('./Image/icon_bottomtag_me_n.png')}
                                icon_r={require('./Image/arrow_right_grey.png')}
                                onClick={() => {this._openCalculator('save')}}/>
                            <MenuItem
                                title='贷款计算器'
                                color='#dddddd'
                                margin2Top='1'
                                icon_l={require('./Image/icon_bottomtag_me_n.png')}
                                icon_r={require('./Image/arrow_right_grey.png')}
                                onClick={() => {this._openCalculator('loan')}}/>
                            <MenuItem
                                title='汇率计算器'
                                color='#dddddd'
                                margin2Top='1'
                                icon_l={require('./Image/icon_bottomtag_me_n.png')}
                                icon_r={require('./Image/arrow_right_grey.png')}
                                onClick={() => {this._openCalculator('rate')}}/>

                        </MenuItem>

                        <MenuItem
                            title='帮助'
                            margin2Top='1'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                            />
                        <MenuItem
                            title='意见反馈'
                            margin2Top='1'
                            icon_l={require('./Image/icon_bottomtag_me_n.png')}
                            icon_r={require('./Image/arrow_right_grey.png')}
                           />

                    </ScrollView>
                </View>
            </View>
        );

    }
});


var styles = StyleSheet.create({

    contentContainer: {
        paddingVertical: 70
    },
    scrollView: {
        backgroundColor: '#6A85B1',
        height: 300,
    },
    container: {
        flex: 1,
    },
    center:{
        alignItems:'center',
        justifyContent: 'center',
    },
    userName:{
        color:'pink',
        fontSize:10,
        alignItems:'center',
        alignSelf:'center',
    },
    transparent:{
        height: 56,
        backgroundColor:'grey',
    },
    header: {
        height: 100,
    },
    iconSize: {
        height:20,
        width:20,
        resizeMode: Image.resizeMode.contain,
    },
    logoSize: {
        height:40,
        width:40,
        alignSelf:'center',
        alignItems:'center',
        resizeMode: Image.resizeMode.contain,
    },
});

module.exports =SetHome;