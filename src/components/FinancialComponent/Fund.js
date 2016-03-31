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
    Dimensions,
    } = React;

var GiftedListView = require('../_thirdpartComponent/react-native-gifted-listview');


var fundData=[{code:'162712',name:'广发聚利债券',rate:16.2},
    {code:'519985',name:'长信纯债壹号债券',rate:11.62},
    {code:'400030',name:'东方添溢债券',rate:10.56},
    {code:'162712',name:'广发聚利债券',rate:16.2},
    {code:'519985',name:'长信纯债壹号债券',rate:11.62},
    {code:'400030',name:'东方添溢债券',rate:10.56},
    {code:'162712',name:'广发聚利债券',rate:16.2},
    {code:'519985',name:'长信纯债壹号债券',rate:11.62},
    {code:'400030',name:'东方添溢债券',rate:10.56},
    {code:'162712',name:'广发聚利债券',rate:16.2},
    {code:'519985',name:'长信纯债壹号债券',rate:11.62},
    {code:'400030',name:'东方添溢债券',rate:10.56}];

var Fund = React.createClass({

    componentDidMount: function() {
    },
    _tabSelectedEvent(msg){
        var router ={name:"FundDetail",msg:msg};
        this.props.navigator.push(router) ;
    },

    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity onPress={()=>this._tabSelectedEvent(fundData[rowData].code)}>
                <View>
                    <View style={styles.row}>
                        <View style={[styles.part_1_left]}>
                            <Text style={styles.textLeftUp}>
                                {fundData[rowData].rate}%
                            </Text>
                            <Text style={styles.textLeftDown}>
                                近一年涨跌幅
                            </Text>
                        </View>

                        <View style={[styles.part_1_right]}>
                            <Text style={styles.textRight}>
                                {fundData[rowData].name}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator}/>
                </View>
            </TouchableOpacity>
        );
    },
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            var rows = [];
            for (var ii = 0; ii < 6; ii++) {
                rows.push(ii);
            }
            if (page === 3) {
                callback(rows, {
                    allLoaded: true, // the end of the list is reached
                });
            } else {
                callback(rows);
            }
        }, 1000); // simulating network fetching
    },
    render: function() {
        return (
            <GiftedListView
                rowView={this._renderRow}
                onFetch={this._onFetch}
                firstLoader={true} // display a loader for the first fetching
                pagination={true} // enable infinite scrolling using touch to load more
                refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                withSections={false} // enable sections
                customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}
                refreshableTintColor="blue"
                />

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
