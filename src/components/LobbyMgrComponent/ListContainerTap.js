/**
 * Created by liu on 2016/3/2.
 */
/**
 * Created by liu on 2016/3/2.
 */
'use strict';
var React = require('react-native');

var {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    ToolbarAndroid,
    Component
    } = React;

class ListContainerTap extends Component{
    render(){
        return(
            <View style={styles.card}>
                <View  style={styles.photocard}/>
                <View style={styles.msgcard}>
                    <View style={[styles.msgRow,{marginTop:2}]}>
                        <Text style={styles.label}>姓  名：</Text>
                    </View>
                    <View style={[styles.msgRow,{marginTop:2}]}>
                        <Text style={styles.label}>工  号：</Text>
                    </View>
                    <View style={[styles.msgRow,{marginTop:2}]}>
                        <Text style={styles.label}>职  务：</Text>
                    </View>
                    <View style={[styles.msgRow,{marginTop:2}]}>
                        <Text style={styles.label}>业  务：</Text>
                    </View>
                    </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#00a2ed',
        height: 56,
        opacity:0.5

    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        flexDirection:'row'
    },
    photocard: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 10,
        height: 100,
        width:70,
        padding: 2,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    msgcard: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 10,
        height: 100,
        width:200,
        padding: 5,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    label: {
        width:150,
        fontSize: 14,
        color:'yellow'
    },
    msgRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

})
module.exports=ListContainerTap;

