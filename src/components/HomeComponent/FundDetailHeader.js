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

var FundDetailHeader = React.createClass({
    _tabSelectedEvent(){
        this.props.navigator.pop();
    },

    componentDidMount() {
        var navigator = this.props.navigator;
        var mainScreen = this.props.mainScreen;

        //alert(this.props.navigator.getCurrentRoutes().length);

        //if(this.props.navigator.getCurrentRoutes().length < 3) {
        //    BackAndroid.addEventListener('hardwareBackPress', function () {
        //        if (navigator && navigator.getCurrentRoutes().length > 1) {
        //            mainScreen._tabbarToggle(true);
        //            navigator.pop();
        //            return true;
        //        }
        //        return false;
        //    });
        //};

    },
    componentWillUnmount() {
        var navigator = this.props.navigator;
        var mainScreen = this.props.mainScreen;

        //alert(this.props.navigator.getCurrentRoutes().length);

        if(this.props.navigator.getCurrentRoutes().length<2) {
            BackAndroid.removeEventListener('hardwareBackPress');
        };
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

        //this.props.mainScreen._tabbarToggle(false);
        return (

            <NavigationBar
                title={{ title: this.props.title, }}
                leftButton={leftButtonConfig}
                 />
        );
    }
});



module.exports=FundDetailHeader
