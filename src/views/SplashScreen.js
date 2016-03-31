'use strict';

var React = require('react-native');
var {
    AsyncStorage,
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    } = React;

var Animated = require('Animated');

var WINDOW_WIDTH = Dimensions.get('window').width;



var SplashScreen = React.createClass({

    getInitialState: function() {
        return {
            cover: null,
            bounceValue: new Animated.Value(1),
        };
    },
    componentDidMount: function() {

        this.state.bounceValue.setValue(1);
        Animated.timing(
            this.state.bounceValue,
            {
                toValue: 1.2,
                duration: 5000,
            }
        ).start();
    },
    render: function() {
        var img, text;
        if (this.state.cover) {
            img = {uri: this.state.cover.img};
            text = this.state.cover.text;
        } else {
            img = require('./../styles/slgimg/splash.png');
            text = '大行德广 伴您成长';
        }

        return(
            <View style={styles.container}>
                <Animated.Image
                    source={img}
                    style={{
            flex: 1,
            width: WINDOW_WIDTH,
            height: 1,
            transform: [
              {scale: this.state.bounceValue},
            ]
          }} />
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    cover: {
        flex: 1,
        width: 200,
        height: 1,
    },
    logo: {
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30,
        height: 54,
        backgroundColor: 'transparent',
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: 'green',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 100,
        backgroundColor: 'transparent',
    }
});

module.exports = SplashScreen;
