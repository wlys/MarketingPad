'use strict';

var React = require('react-native');
var{
    AsyncStorage,
    Image,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    ToastAndroid,
    BackAndroid,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    }=React;

var globalStyles = require('../../styles/globalStyles');
var ScrollView_HEIGHT = globalStyles.WINDOW_HEIGHT- globalStyles.NAVBAR_HEIGHT - globalStyles.TABBAR_HEIGHT - 6*globalStyles.MARGIN_HEIGHT;

var HomeHeader = require('./HomeHeader');
var TopScreen=require('./TopScreen');
var Cat = require('./Cat');
var RecommendList=require('./RecommendList');
var Top5List=require('./Top5List');

var Login = require('./login');

var DRAWER_REF = 'drawer';
var DRAWER_WIDTH_LEFT = 56;
var toolbarActions = [
    //{title: '退出登录', show: 'ifRoom'}
    //{title: '设置选项', show: 'never'}
    {title: 'note_list', icon: require('./../../styles/slgimg/ic_message_white_96_96.png'), show: 'always'}
];




var home =  React.createClass({

    //object在组件被挂载之前调用。
    getInitialState() {
        return {
            cateId : 0,
            theme: null
        };
    },

    //更新分类ID
    handleUpdateList(cateId) {
        this.setState({
            cateId : cateId
        })
    },
    onSelectTheme: function(theme) {
        this.refs[DRAWER_REF].closeDrawer();
        this.setState({theme: theme});
    },
    _renderNavigationView: function() {
        return (
           <Text> xxxx</Text>
        );
    },

    //渲染头部
    _renderHeader() {
        var title = this.state.theme ? this.state.theme.name : '中国农业银行';
        return (
            <HomeHeader navigator={this.props.navigator} title={title} mainScreen={this.props.mainScreen} />

                  /*  <ToolbarAndroid
                        navIcon={require('./../../styles/slgimg/ic_menu_white_72_72.png')}
                        title={title}
                        titleColor="white"
                        style={styles.toolbar}
                        actions={toolbarActions}
                        onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
                        onActionSelected={this.onActionSelected} /> */

        );
    },


    render() {
        var cateId = this.state.cateId;
        return (
           /* <DrawerLayoutAndroid
                ref={DRAWER_REF}
                drawerWidth={Dimensions.get('window').width}
                keyboardDismissMode="on-drag"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this._renderNavigationView}>
            */
            <View style={{}}>

                {this._renderHeader()}


                <ScrollView style={{height:ScrollView_HEIGHT}} >

                    <TopScreen style={{flex:1}} />

                    <Cat navigator={this.props.navigator} />

                    <RecommendList navigator={this.props.navigator} />

                    <Top5List navigator={this.props.navigator} />

                </ScrollView>

            </View>
                //</DrawerLayoutAndroid>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FAFAFA'
    },
    toolbar: {
        backgroundColor: '#333333',
        height: 56
        // opacity:0.5

    }
});

module.exports = home;