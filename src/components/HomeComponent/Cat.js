//首页分类模块

'use strict';

var React = require('react-native');

var {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,

    } = React;

module.exports = React.createClass({
    render() {
        return (
            <View style={{flexDirection:'row', height:160,borderColor: '#CCCCCC',backgroundColor:'white',borderWidth: 1, marginTop:5, marginBottom:5}}>
                <View style={styles.leftCell}>
                    <TouchableOpacity  style={styles.touchCell} onPress={()=>{}}>
                        <Text style={{fontFamily:'Entypo',fontSize:100,color:'#FF44AA', }}>
                            {String.fromCharCode(parseInt('f276',16))}
                        </Text>
                        <Text>我的业绩</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 2,flexDirection:'column'}}>
                    <View style={{flexDirection:'row',flex: 1, borderBottomColor: '#CCCCCC', borderBottomWidth: 1}}>
                        <View style={styles.leftCell}>
                            <TouchableOpacity  style={styles.touchCell} onPress={()=>{}}>
                                <Text style={{fontFamily:'Entypo',fontSize:40,color:"#99FF33"}}>
                                    {String.fromCharCode(parseInt('f24a',16))}
                                </Text>
                                <Text>客户</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightCell1}>
                            <TouchableOpacity  style={styles.touchCell} onPress={()=>{this.props.navigator.push({name:'MorningMeeting'})}}>
                                <Text style={{fontFamily:'FontAwesome',fontSize:40,color:"#FFDD55"}}>
                                    {String.fromCharCode(parseInt('f0f6',16))}
                                </Text>
                                <Text>一页纸</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',flex: 1}}>
                        <View style={styles.leftCell}>
                            <TouchableOpacity  style={styles.touchCell} onPress={()=>{}}>
                                <Text style={{fontFamily:'FontAwesome',fontSize:40,color:"#99FF33"}}>
                                    {String.fromCharCode(parseInt('f1e7',16))}
                                </Text>
                                <Text>走进我们</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightCell1}>
                            <TouchableOpacity  style={styles.touchCell} onPress={()=>{}}>
                                <Text style={{fontFamily:'FontAwesome',fontSize:40,color:"#00DDDD"}}>
                                    {String.fromCharCode(parseInt('f1ec',16))}
                                </Text>
                                <Text>计算器</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
});

// 组件样式
var styles = StyleSheet.create({
    touchCell: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    leftCell:{
        flex: 1,
        borderRightColor: '#CCCCCC',
        borderRightWidth: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    rightCell1:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
});