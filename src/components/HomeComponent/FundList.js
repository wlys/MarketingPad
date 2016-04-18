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

var FundListHeader =require('./FundListHeader');

var GiftedListView = require('../_thirdpartComponent/react-native-gifted-listview');
var Util = require('../../util/util.js');
var ServerConfig = require('../../util/serverconfig.js');

var fundData_1=[{code:'0831',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得"},
    {code:'0832',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得"},
    {code:'0833',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得"},
    {code:'0834',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得"},
    {code:'0835',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得"},
    {code:'0836',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得"},
    {code:'0837',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得"},
    {code:'0838',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得"},
    {code:'0839',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得"},
    {code:'0840',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得"},
    {code:'0841',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得"},
    {code:'0842',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得"},
];

var fundData=[{"code":"162712", "name":"广发聚利债券","rate":16.2},
    {"code":"519985","name":"长信纯债壹号债券","rate":11.62},
    {"code":"400030","name":"东方添溢债券","rate":10.56},
    {"code":"162712","name":"广发聚利债券","rate":16.2},
    {"code":"519985","name":"长信纯债壹号债券","rate":11.62},
    {"code":"400030","name":"广发聚利债券","rate":10.56},
    {"code":"162712","name":"广发聚利债券","rate":16.2},
    {"code":"519985","name":"长信纯债壹号债券","rate":11.62},
    {"code":"400030","name":"广发聚利债券","rate":10.56},
    {"code":"162712","name":"广发聚利债券","rate":16.2},
    {"code":"519985","name":"长信纯债壹号债券","rate":11.62},
    {"code":"400030","name":"广发聚利债券","rate":10.56}]

var FundList = React.createClass({


    _tabSelectedEvent(msg){
        var router ={name:"FundDetail",msg:msg,depth:3};
        this.props.navigator.push(router) ;
    },


    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity onPress={()=>this._tabSelectedEvent(this._fundData[rowData].code)}>
                <View>
                    <View style={styles.row}>
                        <View style={[styles.part_1_left]}>
                            <Text style={styles.textLeftUp}>
                                {this._fundData[rowData].rate}%
                            </Text>
                            <Text style={styles.textLeftDown}>
                                近一年涨跌幅
                            </Text>
                        </View>

                        <View style={[styles.part_1_right]}>
                            <Text style={styles.textRight}>
                                {this._fundData[rowData].name}
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
            this._fundData = fundData;
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
        <View>
        <FundListHeader navigator={this.props.navigator} title="基金列表" mainScreen={this.props.mainScreen} direction={this.props.router.direction}></FundListHeader>
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
module.exports=FundList
