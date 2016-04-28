
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

import Storage from 'react-native-storage';

var storage = new Storage({
    //最大容量，默认值1000条数据循环存储
    size: 1000,

    //数据过期时间，默认一整天（1000 * 3600 * 24秒）
    defaultExpires: 1000 * 3600 * 24,

    //读写时在内存中缓存数据。默认启用。
    enableCache: true,

    //如果storage中没有相应数据，或数据已过期，
    //则会调用相应的sync同步方法，无缝返回最新数据。
    sync : {
        //同步方法的具体说明会在后文提到
    }
});



var App = React.createClass({

    mixins: [TimerMixin],




    getInitialState: function() {
        return {
            splashed: false,
            isFirstIn:false
        };
    },


    componentWillMount:function(){
        console.log("willmount");
        storage.load({
            key: 'userInfo',
            autoSync: true,
            syncInBackground: true
        }).then( ret => {
            console.log(ret.userid);
            alert(ret.userid);
            storage.remove({key:'userInfo'});
        }).catch( err => {
                console.log("no user");
                alert('no user');
                storage.save({
                    key: 'userInfo',  //注意:请不要在key中使用_下划线符号!
                    rawData: {
                        from: 'some other site',
                        userid: 'some userid',
                        token: 'some token'
                    },
                    expires: 1000 * 3600
                });
                console.log("setState..");
                this.setState({isFirstIn:true});
        });
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

          if(this.state.isFirstIn){

            if (this.state.splashed) {
                return <MainScreen initialTab="Home"/>

            } else {
                return <SplashScreen />
            }
        }else{
            return <MainScreen initialTab="Home"/>
        }



    }
});

module.exports =App;
