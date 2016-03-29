/**
 * Created by liu on 2016/3/14.
 */
var React = require('react-native');
var {
    StyleSheet
    } = React;
var FrontStyles = StyleSheet.create({
    tabTitle: {
        color:'#336699',
        fontSize:14,
        flex:1,
        textAlign:'center'
    },
    label:{
        fontSize:12,
        flex:1,
        //textAlign:'center',
       // fontFamily: 'sans-serif-thin'
    },
    custHold:{
        fontFamily:'icomoon',
        marginTop:5,
        fontSize:14

    },
    tellerNum:{
        fontSize:16,
        flex:1,
        textAlign:'center',
        fontFamily: 'sans-serif-thin'
    },
    talk:{
        fontSize:16,
        color:'red',
        flex:1,
        textAlign:'center',

    },
});
module.exports=FrontStyles;