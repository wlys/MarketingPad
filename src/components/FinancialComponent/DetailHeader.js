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
        this.props.mainScreen._tabbarToggle(false);
        return (
            <ToolbarAndroid
                navIcon={require('../LobbyMgrComponent/image/ic_comment_white.png')}
                onIconClicked={() => this._tabSelectedEvent()}
                style={styles.toolbar}
                title={this.props.title} />
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
