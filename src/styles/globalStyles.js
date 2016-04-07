'use strict';

var React = require('react-native');

var {
    Dimensions,
    } = React;

const WINDOW_HEIGHT = (Dimensions.get('window').height);
const NAVBAR_HEIGHT = 55 ;
const TABBAR_HEIGHT = 60;

const WINDOW_WIDTH = (Dimensions.get('window').width);


module.exports = {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  NAVBAR_HEIGHT,
  TABBAR_HEIGHT
};
