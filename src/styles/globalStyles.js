'use strict';

var React = require('react-native');

var {
    Dimensions,
    } = React;

const WINDOW_HEIGHT = (Dimensions.get('window').height);
const NAVBAR_HEIGHT = 50;
const TABBAR_HEIGHT = 60;
const WINDOW_WIDTH = (Dimensions.get('window').width);
const MARGIN_HEIGHT =5;

const BACKGROUND_COLOR_NAVBAR='#009900';
const BACKGROUND_COLOR_HOME='white';
const BACKGOUND_COLOR_MARGIN='#EEEEEE';



module.exports = {
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  NAVBAR_HEIGHT,
  TABBAR_HEIGHT,
  MARGIN_HEIGHT,

  BACKGROUND_COLOR_NAVBAR,
  BACKGROUND_COLOR_HOME,
    BACKGOUND_COLOR_MARGIN
};
