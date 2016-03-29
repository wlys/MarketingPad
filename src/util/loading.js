'use strict';
var React = require('react-native');

var {
  	StyleSheet,
  	View,
    Text,
} = React;

var Loading = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <View style={[styles.container]}>
        <Text>{this.props.loadingtext}</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = Loading;