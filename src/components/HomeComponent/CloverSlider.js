'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');
var {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    } = React;

//获取可视窗口的宽高
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

var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    pageIndicator: {
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 12,
        bottom: -10,
        flexDirection: 'row'
    }
});


module.exports = React.createClass({

    mixins: [TimerMixin],

    //默认值
    getDefaultProps() {
        return {
            width: width,
            indicatorColor: '#ffffff',
            inactiveIndicatorColor: '#ffffff',
            timer: 5000
        }
    },

    //初始化用于状态转换的值
    getInitialState() {
        return {
            currentX: 0,
            activePage: 0,
            dataSource: []
        }
    },
    _scrollMove: function () {

        var scrollView = this.refs.scrollView;
        var length = 3;
        var activePage;

        if ((this.state.activePage + 1) >= length) {
            activePage = 0;
        } else {
            activePage = this.state.activePage + 1;
        }

        var currentX = this.props.width * activePage;
        scrollView.scrollResponderScrollTo(currentX, 0);

        this.setState({
            currentX: currentX,
            activePage: activePage
        });


    },
    _autoScroll(){


        this.timer = this.setInterval(this._scrollMove, this.props.timer)
    },

    componentDidMount() {
        this._autoScroll();
    },

    //TODO 开始滚动时清除timer
    _onScrollBegin(event) {
        this.clearInterval(this.timer);
    },

    _onScrollEnd() {

    },
    //渲染单个图片
    renderItems(data) {

        return data.map(function (item, i) {
            return (
                <Image key={i} style={{width: width,height:itemHeight}} source={{uri: item.img + picFormat}}/>
            );
        })
    },

    render() {
        // var data = this.state.dataSource
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    sendMomentumEvents={true}
                    onMomentumScrollEnd={this.onAnimationEnd}
                    // onScrollBeginDrag={this._onScrollBegin}
                    >
                    <Image style={{width: width,height:itemHeight}}
                           source={{uri:'http://ad.abchina.com/AdFileCache/39369a27-5055-435e-9dbe-2d1beeaf734e.jpg'}}/>
                    <Image style={{width: width,height:itemHeight}}
                           source={{uri:'http://ad.abchina.com/AdFileCache/9f1ae9c6-b180-4680-89f5-181f444c7b31.jpg'}}/>
                    <Image style={{width: width,height:itemHeight}}
                           source={{uri:'http://ad.abchina.com/AdFileCache/0e657d29-797b-4b89-8fa6-c5a4cb024480.jpg'}}/>
                </ScrollView>

            </View>
        );
    },

    renderPageIndicator() {
        var indicators = [],
            style;

        for (var i = 0; i < 3; i++) {
            style = i === this.state.activePage ? {
                color: this.props.indicatorColor,
                opacity: 1
            } : {color: this.props.inactiveIndicatorColor, opacity: 0.3};
            indicators.push(<Text key={i} style={[style, {fontSize: 32}]}>&bull;</Text>)
        }

        return (
            <View style={styles.pageIndicator}>
                {indicators}
            </View>
        )
    },

    onAnimationEnd(e) {
        var activePage = e.nativeEvent.contentOffset.x / this.props.width;
        // console.log(e.nativeEvent)
        this.setState({
            currentX: e.nativeEvent.contentOffset.x,
            activePage: activePage
        });
        this._scrollMove();
    }
});
