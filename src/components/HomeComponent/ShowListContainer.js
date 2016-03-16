/**
 * Created by liu on 2016/3/3.
 */
/**
 * Created by liu on 2016/3/2.
 */
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
    Component
    } = React;

class ShowListContainer extends Component {

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.row}>

                        <View style={{flex :1,backgroundColor: '#eeeeee',opacity:0.9}}>
                        <View style={styles.title}>
                            <Text style={{flex:1,fontSize:16,color:'#ff9900'}}>
                                “金钥匙”
                            </Text>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.containerleft}>
                                <Text style={{flex:1,fontSize:20,color:'red'}}> 4.2%</Text>
                                <Text style={{flex:1,fontSize:16,color:'#000'}}>预期收益</Text>
                            </View>

                            <View style={styles.containerright}>
                                <Text style={{flex:1,fontSize:14,color:'#000'}}>起点金额：</Text>
                                <Text style={{flex:1,fontSize:14,color:'#000'}}>产品期限：</Text>
                                <Text style={{flex:1,fontSize:14,color:'#000'}}>销售地区：</Text>
                            </View>
                        </View>
                            </View>

                </View>
            </TouchableOpacity>
        );
    }
}
var width = 200;
var height = 110;
var styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        width: width,
        height: height,
        padding: 2,
       //borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#000',
        marginLeft:5
    },
    image:{
        flex:1,
    },
    title: {
       // borderWidth: 1,
        height: height * 0.3,
        borderColor: '#000',

    },
    container: {
        flexDirection: 'row',
       // borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        height: height * 0.7,

    },
    containerleft: {

     //   borderWidth: 1,
        width: width * 0.4,
        borderColor: '#000',
    },
    containerright: {
      //  borderWidth: 1,
        borderColor: '#000',
        width: width * 0.6,
    },
    list: {
        marginTop: 5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }


})
module.exports = ShowListContainer;