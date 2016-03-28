'use strict';

/*import React, {
    Component,
    Navigator,
    ToolbarAndroid,
    ScrollView,
    View,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
    DrawerLayoutAndroid,
} from 'react-native';*/

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
var Calculator = require('./SetsComponent/Calculator');
var HelpMe = require('./SetsComponent/HelpMe');
var MenuItem = require('./SetsComponent/MenuItem');
var MyInfo = require('./SetsComponent/MyInfo');
var LogOut = require('./SetsComponent/LogOut');
var MorningPaper = require('./SetsComponent/MorningPaper');

class SetHome extends Component{

    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
        this.state = null;
    }

    _addNavigator (component, title){
        var data = null;
        //设置toolbar标题为title,并显示返回箭头


        this.props.navigator.push({
            title: title,
            component: component,
            passProps:{
                data: data
            }
        });
    }
    _call (){
        alert('tel:... 95599 ...');
    }

    render() {

        return (
            <View>
                <View style={{backgroundColor:'#eef0f3'}}>
                    <View style={styles.transparent}>
                        <Image style={[styles.logoSize]}
                               source={require('./Thumbnails/logo.png')} />
                        <Text style={styles.userName}>您好,测试用户!!</Text>
                    </View>
                </View>

                <MenuItem
                    title='个人信息'
                    icon="./../Thumbnails/icon_bottomtag_me_n.png"
                    onClick={() => {this._addNavigator(MyInfo,"个人信息")}}/>

                <MenuItem
                    title='常用计算器'
                    icon="./../Thumbnails/icon_bottomtag_me_n.png"
                    onClick={() => {this._addNavigator(Calculator,"常用计算器")}}/>

                <MenuItem
                    title='晨会一页纸'
                    margin2Top='1'
                    icon="./../Thumbnails/icon_bottomtag_me_n.png"
                    onClick={() => {this._addNavigator(MorningPaper,"晨会一页纸")}}/>

                <MenuItem
                    title='帮助'
                    margin2Top='1'
                    icon="./../Thumbnails/icon_bottomtag_me_n.png"
                    onClick={() => {this._addNavigator(HelpMe,"帮助")}}/>

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

        );
    }
}

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
        backgroundColor:'green',
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