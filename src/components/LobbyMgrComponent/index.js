/**
 * Created by liu on 2016/3/11.
 */
'use strict';
var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    Component,
    } = React;
var Manager=require('./Manager');
var CustomMsg=require('./CustomMsg');
var Talk=require('./../IMComponent/index');
class index extends Component{
    _configureScene () {
        return Navigator.SceneConfigs.PushFromRight;
    }

    _renderScene (router, navigator) {
        var Component = null;
       // this._navigator = navigator;
        switch (router.name) {
            case "Manager":
                Component = Manager;
                break;
            case "CustomMsg":
                  Component = CustomMsg;
            break;
            case "Talk":
                Component = Talk;
                break;
            default: //default view
                Component = Manager;
        }

        if(Component===CustomMsg){
            return(
                <Component navigator={navigator}  msg={router.msg}/>
            )
        }
       else  return <Component navigator={navigator} tabBarShow={this.props.tabBarShow}/>
    }

    render() {



        return (

            <Navigator
                initialRoute={{name: 'Manager'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene.bind(this)}/>

        );
    }
}
module.exports =index;