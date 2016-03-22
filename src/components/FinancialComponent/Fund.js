//首页分类模块

'use strict';

var React = require('react-native');

var {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    ListView,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
    Dimensions,
    } = React;

var fundData=[{code:'162712',name:'广发聚利债券',rate:16.2},
    {code:'519985',name:'长信纯债壹号债券',rate:11.62},
    {code:'400030',name:'东方添溢债券',rate:10.56}];

var Fund = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
    },

    _genRows: function(): Array<string> {
        var dataBlob = [];
        for (var ii = 0; ii < fundData.length; ii++) {
            dataBlob.push('Row ' + ii);
        }
        return dataBlob;
    },

    _tabSelectedEvent(msg){
        var router ={name:"FundDetail",msg:msg};
        this.props.navigator.push(router) ;
    },
    _renderRow: function(rowData: string, sectionID: number, rowID: number) {

        return (
            <TouchableOpacity onPress={()=>this._tabSelectedEvent(fundData[rowID].code)}>
                <View>
                    <View style={styles.row}>
                        <View style={[styles.part_1_left]}>
                            <Text style={styles.textLeftUp}>
                                {fundData[rowID].rate}%
                            </Text>
                            <Text style={styles.textLeftDown}>
                                近一年涨跌幅
                            </Text>
                        </View>

                        <View style={[styles.part_1_right]}>
                            <Text style={styles.textRight}>
                                {fundData[rowID].name}
                            </Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        );
    },

    render: function() {
        return (
            <View style={styles.listViewHeight}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator}/>}
            />
                </View>
        );
    }
});

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    textLeftUp: {
        fontSize: 20,
        color :'#F00',
    },
    textLeftDown: {
        fontSize: 13,
        opacity:0.5,
    },
    textRight:{
        fontSize: 20,
        //justifyContent: 'center',
        textAlign: 'center',
    },

    listViewHeight:{height:(Dimensions.get('window').height-130)},

    part_1_left:{
        flex: 1,
        borderColor: '#CCCCCC',
        borderRightWidth: 1,
    },
    part_1_right:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center',
    },
});
module.exports=Fund
