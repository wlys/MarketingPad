'use strict';

import React, {
    Component,
    Navigator,
} from 'react-native';

import SetList from './SetList'

class index extends Component{
    _configureScene () {
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    _renderScene (router, navigator) {
        let Component = null;
        switch (router.name) {
            case "Settings":
                Component = SetList;
                break;
            default: //default view
                Component = SetList;
        }

        if(Component===SetList){
            return(
                <Component navigator={navigator} msg={router.msg}/>
            )
        }
       else  return <Component navigator={navigator}/>
    }

    render() {

        return (

            <Navigator
                initialRoute={{name: 'Settings'}}
                configureScene={this._configureScene}
                renderScene={this._renderScene}/>

        );
    }
}
module.exports =index;