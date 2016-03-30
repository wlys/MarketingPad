'use strict';
var React = require('react-native');
var GiftedMessenger = require('./GiftedMessenger');
var {Dimensions,View,ToolbarAndroid,StyleSheet,BackAndroid} = React;

var index = React.createClass({

    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress',function(){
            this.props.tabBarShow(true);
            this.props.navigator.pop();
            return true;
        }.bind(this));
    },
    getMessages() {
        return [
            {text: '你好！', name: '柜员', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2015, 0, 16, 19, 0)},
            {text: "你好！", name: 'Developer', image: null, position: 'right', date: new Date(2015, 0, 17, 19, 0)},
        ];
    },
    handleSend(message = {}, rowID = null) {
        // Send message.text to your server
    },
    handleReceive() {
        this._GiftedMessenger.appendMessage({
            text: 'Received message',
            name: 'Friend',
            image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
            position: 'left',
            date: new Date(),
        });
    },
    _renderHeader() {
        var title = '交谈';
        return (

            <ToolbarAndroid
                navIcon={require('image!ic_back_white')}
                title={title}
                titleColor="white"
                style={styles.toolbar}

                onIconClicked={() => {
                this.props.tabBarShow(true);
                this.props.navigator.pop()}
                }
                onActionSelected={this.onActionSelected}/>

        );
    },
    render() {
        this.props.tabBarShow(false);
        return (
            <View>
                {this._renderHeader()}
            <GiftedMessenger
                ref={(c) => this._GiftedMessenger = c}

                messages={this.getMessages()}
                handleSend={this.handleSend}
                maxHeight={Dimensions.get('window').height - 84} // 64 for the navBar
                sendButtonText='发送'
                placeholder='请输入...'
                styles={{
          bubbleLeft: {
            backgroundColor: '#e6e6eb',
            marginRight: 70,
          },
          bubbleRight: {
            backgroundColor: '#007aff',
            marginLeft: 70,
          },
        }}
                />
                </View>
        );
    },
});

var styles = StyleSheet.create({
    line: {
        marginTop: 1,
        height: 1,
        backgroundColor: 'gray'
    },
    toolbar: {
        backgroundColor: '#333333',
        height: 56


    },
})
module.exports=index;