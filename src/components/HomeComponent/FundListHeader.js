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

var NavigationBar = require( '../_thirdpartComponent/NavBar');

var FundListHeader = React.createClass({
    _tabSelectedEvent(){
        this.props.navigator.pop();
        this.props.mainScreen._tabbarToggle(true);
    },


    _backPressEvent(){

        if (navigator && navigator.getCurrentRoutes().length > 1) {
            mainScreen._tabbarToggle(true);
            navigator.pop();
            return true;
        }
        return false;
    },

    componentDidMount() {
        var navigator = this.props.navigator;
        var mainScreen = this.props.mainScreen;
       alert("DidMount,router's length:"+this.props.navigator.getCurrentRoutes().length);
        BackAndroid.addEventListener('hardwareBackPress', function(){

            if (navigator && navigator.getCurrentRoutes().length > 1) {
                mainScreen._tabbarToggle(true);
                navigator.pop();
                return true;
            }
            return false;
        });
    },

    componentWillUnmount() {
        var navigator = this.props.navigator;
        var mainScreen = this.props.mainScreen;
        alert("WillUnmount,router's length:"+this.props.navigator.getCurrentRoutes().length);
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
                 />
        );
    }
});



module.exports=FundListHeader
