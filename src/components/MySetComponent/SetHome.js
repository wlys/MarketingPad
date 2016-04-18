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
    Component,
    } = React;

var SetHomeHeader = require('./SetHomeHeader');

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

            <View style={{}}>

                {this._renderHeader()}

                <View>
                    <View style={{backgroundColor:'grey'}}>
                        <View style={styles.transparent}>
                            <Image style={[styles.logoSize]}
                                   source={require('./Thumbnails/logo.png')} />
                            <Text style={styles.userName}>您好,测试用户!!</Text>
                        </View>
                    </View>

                    <MenuItem
                        title='个人信息'
                        icon="./../Thumbnails/icon_bottomtag_me_n.png"
                        onClick={() => {this._tabSelectedEvent('MyInfo',"个人信息")}}/>

                    <MenuItem
                        title='常用计算器'
                        icon="./../Thumbnails/icon_bottomtag_me_n.png"
                        onClick={() => {this._tabSelectedEvent('Calculator',"常用计算器")}}/>

                    <MenuItem
                        title='晨会一页纸'
                        margin2Top='1'
                        icon="./../Thumbnails/icon_bottomtag_me_n.png"
                        onClick={() => {this._tabSelectedEvent('MorningPaper',"晨会一页纸")}}/>

                    <MenuItem
                        title='帮助'
                        margin2Top='1'
                        icon="./../Thumbnails/icon_bottomtag_me_n.png"
                        onClick={() => {this._tabSelectedEvent('HelpMe',"帮助")}}/>

                    <TouchableHighlight
                        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red',height:45,marginTop:30}}
                        underlayColor="#dad9d7" onPress={()=>this._call()}>
                        <Text style={styles.themeName}>退出登录</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#ffffd0',height:45,marginTop:30}}
                        underlayColor="#dad9d7" onPress={()=>this._call()}>
                        <Text >拨打客服:999-95599</Text>
                    </TouchableHighlight>

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