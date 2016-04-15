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

var SetHomeHeader = React.createClass({


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

        return (
            <NavigationBar
                title={{ title: this.props.title, }}
                />
        );
    }
});



module.exports=SetHomeHeader;
