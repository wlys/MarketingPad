'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} = React;
var { width, height, scale } = Dimensions.get('window');

var itemHeight = 100,
    picFormat = '_640x200xzq75.jpg';

if (height === 375) {
  itemHeight = 117;
  picFormat = '_750x234xzq75.jpg';
} else if (height === 414) { //IP6 Plug
  itemHeight = 99.6;
  picFormat = '_1080x260xzq75.jpg';
}
//var ViewPager = require('react-native-viewpager');
var ViewPager = require('../_thirdpartComponent/AutoScollView/ViewPager');

var IMGS = [
  'http://ad.abchina.com/AdFileCache/39369a27-5055-435e-9dbe-2d1beeaf734e.jpg',
  'http://ad.abchina.com/AdFileCache/9f1ae9c6-b180-4680-89f5-181f444c7b31.jpg',
  'http://ad.abchina.com/AdFileCache/39369a27-5055-435e-9dbe-2d1beeaf734e.jpg',
 ];

var TopScreen = React.createClass({
  getInitialState: function() {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      dataSource: dataSource.cloneWithPages(IMGS),
    };
  },

  render: function() {
    return (
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true}/>
    );
  },

  _renderPage: function(
    data: Object,
    pageID: number | string,) {
    return (
      <Image
        source={{uri: data}}
        style={{width: width,height:itemHeight}} />
    );
  },
});



module.exports = TopScreen;
