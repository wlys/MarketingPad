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
    ScrollView,
    Dimensions
    } = React;
var globalStyles = require('../../styles/globalStyles');

var ShowListContainer=require('./ShowListContainer');
var RecommendItem = require('./RecommendItem');
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
        return arrayData.map(function (items, key) {
            return (
                <RecommendItem key={key} code={items.code} name={items.name} rate={items.rate} navigator={this.props.navigator}  />
            );
        }.bind(this));
    },

    render: function() {
        return (
            <View>
            <View style={{backgroundColor:'#eeeeee',marginTop:globalStyles.MARGIN_HEIGHT}}>
                <View style={styles.flexContainer}>
                    <View style={{width:30,justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'red',textAlign:'center',fontFamily:'EvilIcons'}}>
                            {String.fromCharCode(parseInt('f120',16))}
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:18,color:'red',margin:globalStyles.MARGIN_HEIGHT,textAlign:'left'}}>今日推荐</Text>

                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:13,color:'grey',margin:globalStyles.MARGIN_HEIGHT,textAlign:'right'}}>更多</Text>
                    </View>
                </View>
                <ScrollView horizontal={true} style={{borderColor:'#eeeeee'}}>
                    {this._renderItems(fundData)}
                </ScrollView>
            </View>

            <View style={{backgroundColor:'#eeeeee',marginTop:globalStyles.MARGIN_HEIGHT}}>
                <Text style={{flex:1,fontSize:18,color:'#cc0000',margin:globalStyles.MARGIN_HEIGHT}}>收益TOP5</Text>
                <ScrollView horizontal={true}>
                    <ShowListContainer/>
                    <ShowListContainer/>
                    <ShowListContainer/>
                    <ShowListContainer/>
                </ScrollView>
            </View>
            </View>
        );

        }
});



var styles = StyleSheet.create({
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flexDirection: 'row',
        height:40

    },
    list: {
        marginTop:5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }


})
module.exports=ShowList;