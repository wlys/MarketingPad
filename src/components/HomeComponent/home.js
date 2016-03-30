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

var HomeHeader = require('./HomeHeader');
var TopScreen=require('./TopScreen');
var Cat = require('./Cat');
var ShowList=require('./ShowList');

var ThemesList = require('./ThemesList');
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
            <DrawerLayoutAndroid
                ref={DRAWER_REF}
                drawerWidth={Dimensions.get('window').width}
                keyboardDismissMode="on-drag"
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this._renderNavigationView}>
            <View style={{flex : 1}}>

                {this._renderHeader()}

                <ScrollView stickyHeaderIndices={[4]}style={{flex:1}} >

                    <TopScreen style={{flex:1}} />

                    <Cat navigator={this.props.navigator} />

                    <ShowList navigator={this.props.navigator} />



                </ScrollView>

            </View>
                </DrawerLayoutAndroid>
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