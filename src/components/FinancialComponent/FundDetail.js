//首页分类模块

'use strict';

var React = require('react-native');
var DetailHeader=require('./DetailHeader');
var {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    ListView,
    TouchableHighlight,
    } = React;

var fundData={'162712':{code:'162712',name:'广发聚利债券',dayIncrease:0.04,weekIncrease:0.47,value:1.4100,typeName:'债券型基金',riskType:'低风险',manager:'代宇',company:'广发基金管理有限公司'},
'519985':{code:'519985',name:'长信纯债壹号债券',dayIncrease:0.04,weekIncrease:0.47,value:1.4100,typeName:'债券型基金',riskType:'低风险',manager:'代宇',company:'广发基金管理有限公司'},
'400030':{code:'400030',name:'东方添溢债券',dayIncrease:0.04,weekIncrease:0.47,value:1.4100,typeName:'债券型基金',riskType:'低风险',manager:'代宇',company:'广发基金管理有限公司'}};

var FundDetail = React.createClass({
    render: function() {
        return (
            <View>
                <DetailHeader navigator={this.props.navigator} title="基金详情"></DetailHeader>
                <View style={styles.row}>
                    <View>
                        <Text style={{fontSize: 25,fontWeight:'bold'}}>
                            {fundData[this.props.router.msg].name + ' ' + this.props.router.msg}
                        </Text>
                    </View>
                    <View style={styles.viewChild}>
                        <View style={styles.part_1_left}>
                            <Text>日涨幅</Text>
                            <Text style={{fontSize: 18,color :'#F00',}}> {fundData[this.props.router.msg].dayIncrease}%</Text>
                        </View>
                        <View style={styles.part_1_left}>
                            <Text>周涨幅</Text>
                            <Text style={{fontSize: 15}}> {fundData[this.props.router.msg].weekIncrease}%</Text>
                        </View>

                        <View style={styles.part_1_right}>
                            <Text>单位净值</Text>
                            <Text style={{fontSize: 15}}> {fundData[this.props.router.msg].value}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.viewChild}>
                        <View style={styles.part_1_left}>
                            <Text style={{fontSize: 20}}> {fundData[this.props.router.msg].typeName}</Text>
                        </View>
                        <View style={styles.part_1_right}>
                            <Text style={{fontSize: 20,color:'#00DDAA'}}>{fundData[this.props.router.msg].riskType}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.viewChild}>
                        <View style={styles.part_1_right}>
                            <Text style={styles.font20}>
                                {String.fromCharCode(parseInt('f282',16))}
                                基金经理
                            </Text>
                        </View>
                        <View style={styles.part_1_right}>
                            <Text style={styles.textAlign}>{fundData[this.props.router.msg].manager}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.viewChild}>
                        <View style={styles.part_1_right}>
                            <Text style={styles.font20}>
                                {String.fromCharCode(parseInt('f1c3',16))}
                                基金公司
                            </Text>
                        </View>
                        <View style={styles.part_1_right}>
                            <Text style={styles.textAlign}>{fundData[this.props.router.msg].company}</Text>
                        </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View>
                    </View>
                    <View>
                    </View>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    row: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    viewChild:{
        flexDirection: 'row',
        padding: 10
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
    },
    textAlign: {
        fontSize: 15,
        textAlign: 'right',
        opacity:0.5,
    },

    part_1_left:{
        flex: 1,
        borderColor: '#CCCCCC',
        borderRightWidth: 1,
    },
    part_1_right:{
        flex: 1,
    },
    font20:{
        fontFamily:'Entypo',
        fontSize:20,
    },
});
module.exports=FundDetail
