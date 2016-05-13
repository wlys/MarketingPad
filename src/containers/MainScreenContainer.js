/**
 * Created by liu on 2016/4/7.
 */
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MainScreenActions from '../reducers/MainScreen/MainScreenActions';
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
var Home = require('../components/HomeComponent');
var LobbyMgr=require('./LobbyMgr');
var Fiancial=require('../components/FinancialComponent');

import MySet from './MySetContainer'
var tabBarProps={};
tabBarProps['onActiveColor']='#009900';
tabBarProps['onInactiveColor']='gray';
tabBarProps['onActiveColorBar']='#009900';
tabBarProps['onInactiveColorBar']='#fff';
var MainScreenContainer = React.createClass({
    _tabbarToggle(value) {
        this.refs['myTabbar'].getBarRef().show(value);
    },
   shouldComponentUpdate:function(){
        return false;
    },
    componentWillReceiveProps:function(nextProps){
        const {ShowTabBar}=nextProps.MainScreen;
       this. _tabbarToggle(ShowTabBar);
    },
    render: function () {
        return (
            <Tabbar ref="myTabbar" barColor={'#eeeeee'} >
                <Tab name="Home">
                    <IconWithBar label=" 首页" {...tabBarProps} type={glypy.Home} from={'icomoon'}/>
                    <RawContent>
                        <Home/>

                    </RawContent>

                </Tab>

                <Tab name="LobbyMgr">
                    <IconWithBar label="大堂管理"  {...tabBarProps} type={glypy.LobbyMgr} from={'FontAwesome'}/>
                    <RawContent>
                        <LobbyMgr {...this.props} tabBarShow={(enable)=>this._tabbarToggle(enable)}/>
                    </RawContent>

                </Tab>

                <Tab name="Fiancial">
                    <IconWithBar label="理财产品"  {...tabBarProps} type={glypy.Fiancial} from={'icomoon'}/>
                    <RawContent>
                        <Fiancial navigator={this.props.navigator} mainScreen={this}/>
                    </RawContent>

                </Tab>
                <Tab name="settings">
                    <IconWithBar label="我的"  {...tabBarProps} type={glypy.Settings} from={'icomoon'}/>
                    <RawContent>
                        <MySet />
                    </RawContent>

                </Tab>
            </Tabbar>
        );
    }
})
function mapStateToProps(state) {
    return {
        ...state
    };
}
function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(MainScreenActions, dispatch)

    };
}
export default connect(mapStateToProps, mapDispatchToProps,null,{withRef:true})(MainScreenContainer);