
'use strict';
var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    Component,
    } = React;
//var Manager=require('../../components/LobbyMgrComponentRedux/Manager');
//var CustomMsg=require('../../components/LobbyMgrComponentRedux/CustomMsg');
import LobbyMgrContainer from './LobbyMgrContainer';
var Talk=require('../../components/IMComponent/index');
class index extends Component{
    _configureScene () {
        return Navigator.SceneConfigs.PushFromRight;
    }

    _renderScene (router, navigator) {


        return (
            <router.Component navigator={navigator} {...this.props} {...this.props.actions}{...router.Payload}/>
        )
    }

    render() {



        return (

            <Navigator
                initialRoute={{Component: LobbyMgrContainer}}
                configureScene={this._configureScene}
                renderScene={this._renderScene.bind(this)}/>

        );
    }
}
module.exports =index;