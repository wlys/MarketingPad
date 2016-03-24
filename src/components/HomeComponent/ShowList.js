'use strict';
var React = require('react-native');
var ShowListContainer=require('./ShowListContainer');
var RecommendItem = require('./RecommendItem');
var {
    StyleSheet,
    TouchableOpacity,
    ListView,
    Text,
    Image,
    View,
    ToolbarAndroid,
    Component,
    ScrollView,
    Dimensions
    } = React;
//var { width, height, scale } = Dimensions.get('window');
//
//var itemHeight = 100,
//    picFormat = '_640x200xzq75.jpg';
//
//if (height === 375) {
//    itemHeight = 117;
//    picFormat = '_750x234xzq75.jpg';
//} else if (height === 414) { //IP6 Plug
//    itemHeight = 99.6;
//    picFormat = '_1080x260xzq75.jpg';
//}
var fundData=[{code:'162712',name:'广发聚利债券',rate:'16.2'},
    {code:'519985',name:'长信纯债壹号债券',rate:'11.62'},
    {code:'400030',name:'东方添溢债券',rate:'10.56'}];


var ShowList = React.createClass({

    _renderItems(arrayData){

        return arrayData.map(function (items, i) {
            return (
                <RecommendItem name={items.name} rate={items.rate} />
            );
        }.bind(this));
    },

    render: function() {
        return (
            <View>
                <Text style={{flex:1,fontSize:18,color:'#3366cc'}}>今日推荐</Text>
                <ScrollView horizontal={true} >
                    {this._renderItems(fundData)}
                </ScrollView>

                <Text style={{flex:1,fontSize:18,color:'#cc0000'}}>收益TOP5</Text>

                <ScrollView
                    //ref='scrollView'
                    //contentContainerStyle={styles.container}
                    //automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    //pagingEnabled={true}
                    //scrollEnabled={false}
                    //showsHorizontalScrollIndicator={false}
                    //sendMomentumEvents={true}
                    // onScrollBeginDrag={this._onScrollBegin}
                    >
                    <ShowListContainer/>
                    <ShowListContainer/>
                    <ShowListContainer/>
                    <ShowListContainer/>
                </ScrollView>
            </View>
        );

        }




});



var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width:150,
        height:60,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
    },
    list: {
        marginTop:5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }


})
module.exports=ShowList;