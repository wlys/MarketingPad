//首页分类模块

'use strict';

'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Dimensions,
    BackAndroid,
    } = React;
var ToolbarAndroid = require('ToolbarAndroid');
var NavigationBar = require( '../_thirdpartComponent/NavBar');

var DetailHeader = React.createClass({
    _tabSelectedEvent(){
        this.props.navigator.pop();
        this.props.mainScreen._tabbarToggle(true);
    },

    componentDidMount() {
        var navigator = this.props.navigator;
        var mainScreen = this.props.mainScreen;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                mainScreen._tabbarToggle(true);
                navigator.pop();
                return true;
            }
            return false;
        });
    },
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    },

    render: function() {
        const leftButtonConfig = {
            title: String.fromCharCode(parseInt('f142',16)),
            handler: () => this._tabSelectedEvent(),

            styleText:{
                fontFamily:'Entypo',
                fontSize:40,
            },
        };
        this.props.mainScreen._tabbarToggle(false);
        return (
            <NavigationBar
                title={{ title: this.props.title, }}
                leftButton={leftButtonConfig}
                tintColor='#00DDAA' />
        );
    }
});

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#00DDAA',
        height:  (Dimensions.get('window').height/13),
    },
});

module.exports=DetailHeader
