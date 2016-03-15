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
var {width, height, scale} = require('./Style');
var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows(this.props.ListData)
            // rateDate:["1"]
        }
    }

    render() {
        return (

            <ListView
                dataSource={ds.cloneWithRows(this.props.ListData)}
                contentContainerStyle={styles.list}
                renderRow={this._renderRow.bind(this)}/>
        );
    }
    _tabSelectedEvent(msg){
        var router ={name:'CustomMsg',msg:msg};
        this.props.navigator.push(router) ;
    }
    _renderRow(rowData:json, sectionID:number, rowID:number) {

        return (
            <TouchableOpacity onPress={()=>this._tabSelectedEvent.bind(this)(rowData.name)}>
                    <View style={styles.row}>
                        <View style={styles.rowleft}>
                            <Text style={{flex:1,fontSize:12,color:'#000'}}>
                                {rowData.num}
                            </Text>
                            <Text style={{flex:1,fontSize:12,color:'green'}}>
                                {rowData.waitTime }分钟
                            </Text>
                        </View>
                        <View  style={styles.rowmid}>
                            <Text style={{flex:1,fontSize:14,color:'#000'}}>
                                {rowData.name}
                            </Text>

                            <Text style={{flex:1,fontSize:12,color:'gray'}}>
                                {rowData.account}
                            </Text>

                        </View>

                    </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        //justifyContent: 'center',
        //width:width,
        height: height * 0.1,
        padding: 1,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
    },
    rowleft: {

        justifyContent: 'center',
        //width:width,
        height: height * 0.1,
        padding: 10,
        //borderWidth: 1,
       // backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
    },
    rowmid: {

        justifyContent: 'center',
        //width:width,
        height: height * 0.1,
        padding: 10,
        //borderWidth: 1,
        // backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
    },
    list: {
       // marginTop: 2,
        justifyContent: 'space-around',
        //flexDirection: 'row',
        flexWrap: 'wrap',

    }


})
module.exports = List;