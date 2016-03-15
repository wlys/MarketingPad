/**
 * Created by xuhanmeng on 16/3/15.
 */
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
var React = require('react-native');
var {
    AppRegistry,
    Text,

    } = React;

const glypy = glypyMapMaker({
    Home: 'e900',
    Manager: 'e901',
    Product: 'e902',
    Settings: 'e903'

});
var Home = require('./../components/HomeComponent');
var LobbyMgr=require('./../components/LobbyMgrComponent');
var MainScreen = React.createClass({

    render: function () {
        return (
            <Tabbar ref="myTabbar" barColor={'#eeeeee'}>
                <Tab name="home">
                    <IconWithBar label=" 首页" type={glypy.Home} from={'icomoon'}/>
                    <RawContent>
                        <Home  navigator={this.props.navigator}/>

                    </RawContent>

                </Tab>
                <Tab name="manager">
                    <IconWithBar label="大堂管理" type={glypy.Manager} from={'icomoon'}/>
                    <RawContent>
                        <LobbyMgr/>
                    </RawContent>

                </Tab>
                <Tab name="stats">
                    <IconWithBar label="理财产品" type={glypy.Product} from={'icomoon'}/>
                    <RawContent>
                        <Text>理财产品</Text>
                    </RawContent>

                </Tab>

                <Tab name="settings">
                    <IconWithBar label="我的设置" type={glypy.Settings} from={'icomoon'}/>
                    <RawContent>
                        <Text>我的设置</Text>
                    </RawContent>

                </Tab>
            </Tabbar>
        );
    }
})
module.exports = MainScreen;