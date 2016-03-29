import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
var React = require('react-native');
var {
    AppRegistry,
    Text,

    } = React;

const glypy = glypyMapMaker({
    Home: 'e900',
    LobbyMgr: 'f0c0',
    Fiancial: 'e902',
    Settings: 'e903'

});
var Home = require('./../components/HomeComponent');
var LobbyMgr=require('./../components/LobbyMgrComponent');
var Fiancial=require('./../components/FinancialComponent');
var MySet=require('./../components/MySetComponent');

var MainScreen = React.createClass({
    _tabbarToggle(value) {
        this.refs['myTabbar'].getBarRef().show(value);
    },

    render: function () {
        return (
            <Tabbar ref="myTabbar" barColor={'#eeeeee'} initialTab={this.props.initialTab}>
                <Tab name="Home">
                    <IconWithBar label=" 首页" type={glypy.Home} from={'icomoon'}/>
                    <RawContent>
                        <Home/>

                    </RawContent>

                </Tab>

                <Tab name="LobbyMgr">
                    <IconWithBar label="大堂管理" type={glypy.LobbyMgr} from={'FontAwesome'}/>
                    <RawContent>
                        <LobbyMgr/>
                    </RawContent>

                </Tab>

                <Tab name="Fiancial">
                    <IconWithBar label="理财产品" type={glypy.Fiancial} from={'icomoon'}/>
                    <RawContent>
                        <Fiancial navigator={this.props.navigator} mainScreen={this}/>
                    </RawContent>

                </Tab>
                <Tab name="settings">
                    <IconWithBar label="我的" type={glypy.Settings} from={'icomoon'}/>
                    <RawContent>
                        <MySet />
                    </RawContent>

                </Tab>
            </Tabbar>
        );
    }
})
module.exports = MainScreen;