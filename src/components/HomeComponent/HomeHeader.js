'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Dimensions,
    BackAndroid,
    } = React;

var NavigationBar = require( '../_thirdpartComponent/NavBar');

var HomeHeader = React.createClass({
    _tabSelectedEvent(){
        var router = {name:'Login'};
        this.props.navigator.push(router);
        //this.props.mainScreen._tabbarToggle(true);
    },

    //componentDidMount() {
    //    var navigator = this.props.navigator;
    //    var mainScreen = this.props.mainScreen;
    //    BackAndroid.addEventListener('hardwareBackPress', function() {
    //        if (navigator && navigator.getCurrentRoutes().length > 1) {
    //            mainScreen._tabbarToggle(true);
    //            navigator.pop();
    //            return true;
    //        }
    //        return false;
    //    });
    //},
    //componentWillUnmount() {
    //    BackAndroid.removeEventListener('hardwareBackPress');
    //},

    render: function() {
        const leftButtonConfig = {
            title: String.fromCharCode(parseInt('f0c9',16)),
            styleText:{
                fontFamily:'FontAwesome',
                fontSize:33,
            },
            tintColor :'white',
            handler: () => this._tabSelectedEvent(),
        };
        const rightButtonConfig = {
            title: String.fromCharCode(parseInt('f003',16)),

            styleText:{
                fontFamily:'FontAwesome',
                fontSize:33,
            },
            tintColor :'white',
            //handler: () => this._tabSelectedEvent(),
        };
        //this.props.mainScreen._tabbarToggle(false);
        return (
            <NavigationBar
                title={{ title: this.props.title, }}
                leftButton={leftButtonConfig}
                rightButton={rightButtonConfig}
                tintColor='#00DDAA' />
        );
    }
});



module.exports=HomeHeader;
