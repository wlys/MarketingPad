
'use strict';
import React, {
    AppRegistry,
    Component,
    Navigator,
    BackAndroid,
} from 'react-native';

var TimerMixin = require('react-timer-mixin');

var MainScreen = require('./MainScreen');
var SplashScreen = require('./SplashScreen');

var App = React.createClass({

    mixins: [TimerMixin],

    getInitialState: function() {
        return {
            splashed: false,
        };
    },

    componentDidMount: function() {
        this.setTimeout(
            () => {
                this.setState({splashed: true});
            },
            2000
        );
    },

    render: function() {
        if (this.state.splashed) {
            return <MainScreen initialTab="Home"/>
        } else {
            return <SplashScreen />
        }
    }
});

module.exports =App;
