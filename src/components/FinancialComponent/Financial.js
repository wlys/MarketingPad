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
var Util = require('../../util/util.js');
var ServerConfig = require('../../util/serverconfig.js');

var fundData=[{code:'0831',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得"},
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

var Financial = React.createClass({

    componentDidMount: function() {
    },
    _tabSelectedEvent(msg){
        var router ={name:"FinancialDetail",msg:msg};
        this.props.navigator.push(router) ;
    },

    _renderRow: function(rowData: string, sectionID: number, rowID: number) {
        return (
            <TouchableOpacity onPress={()=>this._tabSelectedEvent(this._fundData[rowData].code)}>
                <View style={{flexDirection:'column', borderBottomColor: '#CCCCCC', borderBottomWidth: 0.8,backgroundColor:'white', marginTop:10}}>
                    <View style={{flex:1,flexDirection:'column',borderBottomColor: '#CCCCCC', borderBottomWidth: 0.8}}>
                        <Text style={{marginLeft:5, fontSize: 18,}}>
                            {this._fundData[rowData].name}
                        </Text>
                        <Text style={styles.textLittle}>
                            {this._fundData[rowData].remark}
                        </Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:1,flexDirection:'column',borderRightColor: '#CCCCCC', borderRightWidth:  0.8}}>
                            <Text style={styles.textNumber}>
                                {this._fundData[rowData].rate}
                            </Text>
                            <Text style={styles.textLittle}>
                                预期年化收益率(%)
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={styles.textNumber}>
                                {this._fundData[rowData].days}
                            </Text>
                            <Text style={styles.textLittle}>
                                建议持有期限(天)
                            </Text>
                        </View>
                    </View>
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
    textLittle: {
        marginLeft:5,
        fontSize: 13,
        opacity:0.7,
    },
    textNumber: {
        marginLeft:5,
        fontSize: 20,
        color:'red',
    },
});
module.exports=Financial
