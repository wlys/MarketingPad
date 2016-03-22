//首页分类模块

'use strict';

'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Dimensions,
    } = React;
var ToolbarAndroid = require('ToolbarAndroid');


var DetailHeader = React.createClass({
    _tabSelectedEvent(){
        this.props.navigator.pop();
    },
    render: function() {
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
