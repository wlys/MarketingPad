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
    ScrollView,
    Dimensions,
    TouchableHighlight,
    } = React;



var fundData={'0831':{code:'0831',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得",
    startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
    company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0832':{code:'0832',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0833':{code:'0833',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0834':{code:'0834',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0835':{code:'0835',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0836':{code:'0836',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0837':{code:'0837',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0838':{code:'0838',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0839':{code:'0839',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0840':{code:'0840',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0841':{code:'0841',name:'百赚365',rate:7.680,days:365,remark:"踏实省心，限时限量，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
    '0842':{code:'0842',name:'百赚180',rate:6.7,days:180,remark:"千元起购，限时抢购，先到先得",
        startMoney:1000,risk:'中低',startDate:'2016年5月1日',endDate:'2017年5月1日',
        company:'富德生命人寿',productName:'生命e理财年金保险(万能型)',productType:'万能型保险'},
};

var FundDetail = React.createClass({
    render: function() {
        return (
            <View>
                <DetailHeader navigator={this.props.navigator} title="产品详情" mainScreen={this.props.mainScreen}></DetailHeader>
                <View style={{height:60,flexDirection:'column'}}>
                    <Text style={{fontSize: 20,fontWeight:'bold'}}>
                        {fundData[this.props.router.msg].name + '(' + this.props.router.msg + ")"}
                    </Text>
                    <Text style={{marginTop:5,fontSize: 20}}>
                        {fundData[this.props.router.msg].remark}
                    </Text>
                </View>
                <ScrollView key={'scrollView'} horizontal={false} style={styles.scrollStyle}>
                    <View style={{marginTop:10,flexDirection:'row', backgroundColor:'white',}}>
                        <View style={{flex:1,flexDirection:'column',borderRightColor: '#CCCCCC', borderRightWidth:  0.8}}>
                            <Text style={styles.textLittle}>
                                预期年化收益率(%)
                            </Text>
                            <Text style={styles.textNumber}>
                                {fundData[this.props.router.msg].rate}
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={styles.textLittle}>
                                建议持有期限(天)
                            </Text>
                            <Text style={styles.textNumber}>
                                {fundData[this.props.router.msg].days}
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop:30, backgroundColor:'white',}}>
                        <View style={styles.textBottom}>
                            <Text style={styles.textLeft}>
                                起买金额
                            </Text>
                            <Text style={styles.textRight}>
                                {fundData[this.props.router.msg].startMoney}
                            </Text>
                        </View>
                        <View style={styles.textBottom}>
                            <Text style={styles.textLeft}>
                                风险程度
                            </Text>
                            <Text style={styles.textRight}>
                                {fundData[this.props.router.msg].risk}
                            </Text>
                        </View>
                        <View style={styles.textBottom}>
                            <Text style={styles.textLeft}>
                                生效日期
                            </Text>
                            <Text style={styles.textRight}>
                                {fundData[this.props.router.msg].startDate}
                            </Text>
                        </View>
                        <View style={styles.textBottom}>
                            <Text style={styles.textLeft}>
                                建议最低持有至
                            </Text>
                            <Text style={styles.textRight}>
                                {fundData[this.props.router.msg].endDate}
                            </Text>
                        </View>

                        <View style={styles.textBottom}>
                            <Text style={styles.textLeft}>
                                保险公司
                            </Text>
                            <Text style={styles.textRight}>
                                {fundData[this.props.router.msg].company}
                            </Text>
                        </View>

                        <View style={styles.textBottom}>
                            <Text style={styles.textLeft}>
                                产品名称
                            </Text>
                            <Text style={styles.textRight}>
                                {fundData[this.props.router.msg].productName}
                            </Text>
                        </View>

                        <View style={styles.textBottom}>
                            <Text style={styles.textLeft}>
                                产品类型
                            </Text>
                            <Text style={styles.textRight}>
                                {fundData[this.props.router.msg].productType}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    textLittle: {
        marginLeft:5,
        fontSize: 18,
        opacity:0.9,
    },
    textNumber: {
        marginLeft:5,
        fontSize: 20,
        color:'red',
    },
    textBottom:{
        marginTop:5,
        marginRight:5,
        marginLeft:5,
        flexDirection:'row',
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 0.8,
    },
    textLeft:{
        fontSize:18,
        flex:1,
        textAlign: 'left'
    },
    textRight:{
        fontSize:18,
        flex:1,
        textAlign: 'right'
    },
    scrollStyle: {
        height: (Dimensions.get('window').height - 50 - 60),
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:'#eeeeee',
    }
});
module.exports=FundDetail
