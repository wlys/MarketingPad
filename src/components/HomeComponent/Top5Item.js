'use strict';
var React = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    ListView,
    Text,
    Image,
    View,
    ToolbarAndroid,
    Component,
    Dimensions
    } = React;

var globalStyles = require('../../styles/globalStyles');
var BACKGROUND_COLOR_HOME=globalStyles.BACKGROUND_COLOR_HOME;

var { width, height, scale } = Dimensions.get('window');
width = width/2 -12;
height = 110;

var Top5Item = React.createClass({

    _tabSelectedEvent(msg){
        //var router ={name:"FundDetail",msg:msg};
        //this.props.navigator.push(router) ;
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>this._tabSelectedEvent(this.props.code)}>
                <View style={styles.row}>

                        <View style={{flex :1,backgroundColor:BACKGROUND_COLOR_HOME}}>
                        <View style={styles.title}>
                            <Text style={{flex:1,fontSize:16,color:'#ff9900',marginLeft:5}}>
                                {this.props.name}
                            </Text>
                        </View>
                        <View style={{alignItems:'center',}}>

                                <Text style={{fontSize:28,color:'red'}}> {this.props.rate}%</Text>
                                <Text style={{fontSize:12,color:'grey',textAlign: 'center'}}>预期年化收益率</Text>


                        </View>
                            </View>

                </View>
            </TouchableOpacity>
        );
    }
})

var styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        width: width,
        height: height,
      //  padding: 2,
       //borderWidth: 1,
        backgroundColor: '#0099CC',
        opacity:0.9,
       // borderColor: '#000',
        marginLeft:6
    },
    image:{
        flex:1,
    },
    title: {
       // borderWidth: 1,
        height: height * 0.3,
        //borderColor: '#000',

    },
    container: {
        flexDirection: 'row',
       // borderWidth: 1,
        //borderColor: 'rgba(0,0,0,0.1)',
        height: height * 0.7,

    },
    containerleft: {

     //   borderWidth: 1,
        width: width * 0.4,
        //borderColor: '#000',
    },
    containerright: {
      //  borderWidth: 1,
        //borderColor: '#000',
        width: width * 0.4,
    },
    list: {
        marginTop: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }


})
module.exports = Top5Item;