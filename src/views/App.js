
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
    BackAndroid,
} from 'react-native';

var MainScreen = require('./MainScreen');

var App = React.createClass({

    render: function() {
        return <MainScreen initialTab="Home" />
    }

});

module.exports =App;
