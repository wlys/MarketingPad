'use strict';

import React, {
    Component,
    ToolbarAndroid,
    Navigator,
    StyleSheet,
    View,
} from 'react-native';
import NavigationBar from '../_thirdpartComponent/NavBar';
import InitialScreen from './SetsComponent/InitialScreen';

import SetHome from './SetHome'


/*
var toolbarActions = [
    {title: '个人中心',icon:require('image!ic_settings_black_48dp'), show: 'always'},
];
*/

var toolbarActions =[];
//let navIconUrl = './Thumbnails/search.png';
let navIconUrl ="http://facebook.github.io/react/img/logo_og.png";
//let navIconUrl ="./Thumbnails/search.png";

class index extends Component{

    constructor(props) {
        super(props);   //这一句不能省略，照抄即可

    }
    state = {
        actionText: '初始的个人中心',  //这里放你自己定义的state变量及初始值//
        title:'个人中心',
        toolbarSwitch: false,
        navIconUrl:'',
        colorProps:{
            titleColor:'red',
            subtitleColor:'green',
            titleFontSize:50,
        }
    };

    _configureScene () {
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    _setNavIconUrl () {
        let navIconUrl =this.state.navIconUrl;
        alert(navIconUrl);
        /*if(navIconUrl===''){
            return '';
        }*/
        return navIconUrl;
    }
    _renderScene (router, navigator) {
        let Component = router.component;
        let currentTab = router.title;
        if(router.title != "我的"){
            this.setState({title: currentTab,navIconUrl:'http://facebook.github.io/react/img/logo_og.png'});
        }
            return(
                <Component navigator={navigator}/>
            )


        //if(router.title === "常用计算器"){
        /*    return(
                <Component navigator={navigator}/>
            )
        }*/
    }

    render() {
        let data =null;
        return (

            <View  style={{flex:1}}>
                <ToolbarAndroid
                    actions={toolbarActions}
                    navIcon={{uri: this.state.navIconUrl}} ///require{uri: navIconUrl};navIcon={require('./Thumbnails/search.png')}
                    style={styles.toolbar}
                    title={this.state.title}
                    onIconClicked={() => this.setState({title: '个人中心',navIconUrl:''})}
                    {...this.state.colorProps}
                />
                <Navigator
                    initialRoute={{
                component: SetHome,
                title: "我的",
                passProps:{
                data: data
                }
                }}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene.bind(this)}
                />
            </View>


        );
    }
}
var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,

    },
});

module.exports =index;