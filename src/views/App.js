
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
    BackAndroid,
} from 'react-native';

var TimerMixin = require('react-timer-mixin');

var MainScreen = require('./MainScreen');
var SplashScreen = require('./SplashScreen');
var GuideScreen = require('./GuideScreen');

import Storage from 'react-native-storage';

var storage = new Storage({
    //���������Ĭ��ֵ1000������ѭ���洢
    size: 1000,

    //���ݹ���ʱ�䣬Ĭ��һ���죨1000 * 3600 * 24�룩
    defaultExpires: 1000 * 3600 * 24,

    //��дʱ���ڴ��л������ݡ�Ĭ�����á�
    enableCache: true,

    //���storage��û����Ӧ���ݣ��������ѹ��ڣ�
    //��������Ӧ��syncͬ���������޷췵���������ݡ�
    sync : {
        //ͬ�������ľ���˵�����ں����ᵽ
    }
});



var App = React.createClass({

    mixins: [TimerMixin],




    getInitialState: function() {
        return {
            splashed: false,
            isFirstIn:true
            //in fact ,should be initialized as false
        };
    },


    componentWillMount:function(){
        console.log("willmount");


        //storage.load({
        //    key: 'userInfo',
        //    autoSync: false,
        //    syncInBackground: false
        //}).then( ret => {
        //    console.log(ret.userid);
        //    //alert(ret.userid);
        //    storage.remove({key:'userInfo'});
        //}).catch( err => {
        //    console.log("no user");
        //    //alert('no user');
        //    storage.save({
        //        key: 'userInfo',  //ע��:�벻Ҫ��key��ʹ��_�»��߷���!
        //        rawData: {
        //            from: 'some other site',
        //            userid: 'some userid',
        //            token: 'some token'
        //        },
        //        expires: 1000 * 3600
        //    });
        //    console.log("setState..");
        //    this.setState({isFirstIn:true});
        //});


    },
    componentDidMount:function(){
        console.log('didmount');
    },
    componentDidUpdate: function() {
        console.log("didupdate");
        //if(this.state.isFirstIn){
        //    this.setTimeout(
        //        () => {
        //            this.setState({splashed: true});
        //        },
        //        2000
        //    );
        //}

    },


    render: function() {

        console.log('render');

        if(this.state.isFirstIn){

            if (this.state.splashed) {
                return <MainScreen initialTab="Home"/>

            } else {
                return <GuideScreen />
            }
        }else{
            return <MainScreen initialTab="Home"/>
        }



    }
});

module.exports =App;
