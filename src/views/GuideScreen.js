/**
 * Created by damao on 2016/4/29.
 */

'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableHighlight
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
var ViewPager = require('../components/_thirdpartComponent/AutoScollView/ViewPager');
var MainScreen = require('./MainScreen');

var IMGS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
];

var GuideScreen = React.createClass({


    getInitialState: function() {
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        return {
            dataSource: dataSource.cloneWithPages(IMGS),
            goToMainScreen:false
        };
    },

    _goToMainScreen1:function(data,pageID){
        this.setState({goToMainScreen:true});
    },

    render: function() {
        if(this.state.goToMainScreen){
            return ( <MainScreen initialTab="Home" />);
        }else{
            return (
                <ViewPager
                    style={this.props.style}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={false}
                    autoPlay={false}/>
            );
        }

    },

    _renderPage: function(
        data: Object,
        pageID: number){
    console.log(pageID);
    if(pageID == 2){
        return (
            <Image source={require("./GuideScreen_2.jpg")} style={{width: width,height:height}} >
                <View style={styles.loginform}>
                    <TouchableHighlight style={[styles.btn,styles.marginTop500]} underlayColor='#0057a84a' onPress={()=>this._goToMainScreen1(data,pageID)} >
                        <Text style={{color:'#fff'}}>开始使用</Text>
                    </TouchableHighlight>
                </View>

            </Image>

        );
    }else{
        if(pageID ==0){
            return (
                <Image  source={require("./GuideScreen_0.jpg")}  style={{width: width,height:height}}/>
            );
        }else{
            return (
                <Image  source={require("./GuideScreen_1.jpg")}  style={{width: width,height:height}}/>
            );
        }

    }

},
});


var styles = StyleSheet.create({
    container: {
        flex:1,
    },
    loginform:{
        backgroundColor:'#00000000',
        paddingLeft:40,
        paddingRight:40,
    },
    transparent:{
        backgroundColor:'#00000000',
    },
    title: {
        color:'#ffffff',
        fontSize:20,
        flex:1,
        textAlign:'center',
    },
    action:{
        height:50,
    },
    line:{
        height:1,
        backgroundColor: '#ffffff',
    },
    marginleft10:{
        marginLeft:10,
    },
    marginTop20:{
        marginTop:20,
    },
    marginTop500:{
        marginTop:460,
    },
    marginRight10:{
        marginRight:10,
    },
    inputRow:{

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:35,
        borderColor:'#ccc',
        color:'#fff',
        flex:1,
        fontSize:14,
    },
    label: {
        width:80,
        fontSize: 14
    },
    btn:{
        height:55,
        backgroundColor:'#4d796e',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#ffffff',
    }
});


module.exports = GuideScreen;
