import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
var React = require('react-native');
var {
    AppRegistry,
    Text,
    } = React;

var globalStyles = require('../styles/globalStyles');

const glypy = glypyMapMaker({
    Home: 'e904',
    LobbyMgr: 'e900',
    Fiancial: 'e902',
    FiancialMarket:'f012',
    Settings: 'e901'
});
var Home = require('./../components/HomeComponent');
var LobbyMgr=require('./../components/LobbyMgrComponent');
var Fiancial=require('./../components/FinancialComponent');
var FiancialMarket=require('./../components/FinancialComponent/FinancialMarketWebView');
var MySet=require('./../components/MySetComponent');

var tabBarProps={};
tabBarProps['onActiveColor']='#009900';
tabBarProps['onInactiveColor']='gray';
tabBarProps['onActiveColorBar']='#009900';
tabBarProps['onInactiveColorBar']='#fff';

var MainScreen = React.createClass({
    _tabbarToggle(value) {
        if(this.refs['myTabbar'])
            this.refs['myTabbar'].getBarRef().show(value);
    },

    render: function () {
        return (
            <Tabbar ref="myTabbar" barColor={'#eeeeee'} barSize={globalStyles.TABBAR_HEIGHT} initialTab={this.props.initialTab}>
                <Tab name="Home">
                    <IconWithBar label=" 首页" {...tabBarProps} type={glypy.Home} from={'icomoon_slg'} size={26}/>
                    <RawContent>
                        <Home mainScreen={this}/>
                    </RawContent>
                </Tab>

                <Tab name="LobbyMgr">
                    <IconWithBar label="大堂管理"  {...tabBarProps} type={glypy.LobbyMgr} from={'icomoon_slg'} size={26}/>
                    <RawContent>
                        <LobbyMgr  tabBarShow={(enable)=>this._tabbarToggle(enable)}/>
                    </RawContent>
                </Tab>

                <Tab name="Fiancial">
                    <IconWithBar label="理财产品"  {...tabBarProps} type={glypy.Fiancial} from={'icomoon'} size={26}/>
                    <RawContent>
                        <Fiancial mainScreen={this}/>
                    </RawContent>
                </Tab>
                <Tab name="FiancialMarket">
                    <IconWithBar label="金融行情"  {...tabBarProps} type={glypy.FiancialMarket} from={'FontAwesome'} size={26}/>
                    <RawContent>
                        <FiancialMarket/>
                    </RawContent>
                </Tab>
                <Tab name="settings">
                    <IconWithBar label="我的"  {...tabBarProps} type={glypy.Settings} from={'icomoon_slg2'} size={24}/>
                    <RawContent>
                        <MySet />
                    </RawContent>

                </Tab>
            </Tabbar>
        );
    }
})
module.exports = MainScreen;