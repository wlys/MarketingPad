/**
 * Created by liu on 2016/3/11.
 */

'use strict';
var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    View,
    Text,
    Component,
    Dimensions,
    StyleSheet,
    ScrollView
    } = React;
var Manager = require('./Manager');
var {width, height, scale} = require('./Style');
class CustomMsg extends Component {

    _baseMsg() {
        return (
            <View ref='baseMsgView'>
                <Text style={styles.titleFront}>基本资料</Text>
                <View style={[styles.line]}/>
                <View style={styles.baseMsg}>
                    <View style={styles.photo}>
                        <Text> 照片 </Text>
                    </View>
                    <View style={styles.custMsg}>
                    <View>
                        <View>
                            <Text style={styles.custMsgFront}>客户等级</Text>
                        </View>
                        <View>
                            <Text style={styles.custMsgFront}>客户号</Text>
                        </View>
                        <View>
                            <Text style={styles.custMsgFront}>客户经理</Text>
                        </View>
                        <View>
                            <Text style={styles.custMsgFront}>客户经理号</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.tipFront}>标签</Text>
                    </View>
                        </View>
                </View>
            </View>
        );
    }

    _assetchg() {
        return (
            <View style={styles.assetChg}>
                <View>
                <Text style={styles.titleFront}>资产变动情况</Text>
                <View style={[styles.line]}/>
                </View>
                <View style={{flex:1}}>
                    <Text>123</Text>
                </View>

            </View>
        );
    }

    _assetmix() {
        return (
            <View style={styles.assetMix}>
                <View>
                <Text style={styles.titleFront}>资产分布情况</Text>
                <View style={[styles.line]}/>
                </View>
                <View>
                </View>

            </View>
        );
    }

    _custhold() {
        return (
            <View style={styles.custHold}>
                <View>
                <Text style={styles.titleFront}>客户持有产品</Text>
                <View style={[styles.line]}/>
                </View>
                <View>

                </View>
            </View>
        );
    }

    _custnothold() {
        return (
            <View style={styles.custNotHold}>
                <View>
                <Text style={styles.titleFront}>客户未持有产品</Text>
                <View style={[styles.line]}/>
                </View>
                <View>

                </View>
            </View>
        );
    }

    _importTip() {
        return (
            <View>
                <View>
                <Text style={styles.titleFront}>重要商机提醒</Text>
                <View style={[styles.line]}/>
                </View>
                <ScrollView style={styles.scrollView}
                            horizontal={true}
                            sendMomentumEvents={true}>
                    {this._renderTipItems(tipData)}
                </ScrollView>
            </View>
        );
    }

    _renderTipItems(tipData) {


        return tipData.map(function (items, i) {
            return (

                <View>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>

            )
        }.bind(this))

    }

    render() {

        return (
            <View style={styles.page}>
            <ScrollView style={{backgroundColor : '#fff',flex:1}}>
                <Text>{this.props.msg}</Text>


                    { this._baseMsg()}
                    <View style={styles.assert}>
                        {this._assetchg()}
                        {this._assetmix()}
                    </View>
                    <View  style={styles.hold}>
                        { this._custhold()}
                        {this._custnothold()}
                    </View>

            </ScrollView>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    line: {
        marginTop:1,
        height: 1,
        backgroundColor: 'gray'
    },
    titleFront: {
        flex: 1,
        fontSize: 12,
        color: 'gray'
    },
    custMsgFront:{
        fontSize: 12,
        color:"green",
        marginTop:5
    },
    tipFront:{
        fontSize: 12,
        color:"red",
        marginTop:5 
    },
    page: {
        flex: 1,
        padding: 10
    },
    baseMsg: {
       // backgroundColor: 'red',
        flexDirection: 'row',
        height:height*0.28,
        padding:5
    },
    photo:{
        width:width*0.3,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth:1
    },
    custMsg:{
        paddingLeft:20,

    },
    assert:{
       // backgroundColor: 'green',
        flexDirection: 'row',
        height:height*0.28,
        justifyContent:'space-between'
    },
    assetChg:{
       // backgroundColor: 'green',
        //flexDirection: 'row',
        width:width*0.42,
        justifyContent:'flex-start'
    },
    assetMix:{
       // backgroundColor: 'red',
       // flexDirection: 'row',
        width:width*0.42
    },
    hold:{
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        height:height*0.20,
        justifyContent:'space-between'
    },
    custHold:{
      //  backgroundColor: 'green',
      //  flexDirection: 'row',
        width:width*0.42
    },
    custNotHold:{
     //   backgroundColor: 'red',
      //  flexDirection: 'row',
        width:width*0.42
    }

});
module.exports = CustomMsg;