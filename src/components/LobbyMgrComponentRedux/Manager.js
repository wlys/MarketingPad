
'use strict';
var React = require('react-native');
var ThemesList=require('./ThemesList');
var NavigationBar = require( '../_thirdpartComponent/NavBar');
var {
    AppRegistry,
    Image,
    ListView,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    ToolbarAndroid,
    StyleSheet,
    Text,
    Dimensions,
    BackAndroid,
    DrawerLayoutAndroid,
    Component,
    View,
    } = React;
var { width, height, scale } = Dimensions.get('window');
var DRAWER_REF = 'drawer';
var DRAWER_WIDTH_LEFT = 56;
//var FacebookTabBar = require('./FacebookTabBar');
// var Rate=require('./rate');
//var Index=require('./Index');
//var Home=require('./home');


var ListContainer = require('./ListContainerTap');
var List = require('./List');
var FrontStyles=require('./FrontStyles');
var TellerData = [{
    CounterNum: 1,
    TellerNum: "1000",
    Busi: ["现金", "对公"]
}, {
    CounterNum: 2,
    TellerNum: "1001",
    Busi: ["理财", "VIP"]
},
    {
        CounterNum: 3,
        TellerNum: "1002",
        Busi: ["现金"]
    },
    {
        CounterNum: 4,
        TellerNum: "1003",
        Busi: ["对公"]
    },
];
var toolbarActions = [
    {title: '客户检索',icon:require('./image/search.png'), show: 'always'},
    {title: '交谈', icon:require('./image/ic_comment_white.png'),show: 'always'},
    {title: '信息查找', icon:require('./image/ic_share_white.png'),show: 'always'}
];
//var listdata1 = ['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11', 'row 12'];
//var listdata2 = ['row 11', 'row 21', 'row 31', 'row 41', 'row 51', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11', 'row 12'];
var listdata1 = [
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'}


];
var listdata3 = [
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'},
    {name:'刘孟轩',num:'V001',account:'1234567890123456',waitTime:'15'}


];
var listdata2 = [{name:'杨永向',num:'A001',account:'1234567890123456',waitTime:'15'}];
var listdata4 = [{name:'杨永向',num:'A001',account:'1234567890123456',waitTime:'15'}];
var CustomData=[listdata1,listdata2,listdata3,listdata4];
class Manager extends Component {
    // 构造

    constructor(props) {
        super(props);
        // 初始状态
        this._onBackAndroid=this.onBackAndroid.bind(this)
    }
    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid);

    }
    onBackAndroid() {
        const {showTabBar,tabBarShow}=this.props;
        showTabBar(true);
        if (this.props.navigator.getCurrentRoutes().length > 1) {
           this.props.navigator.pop();
          return true;
        }
    }
    componentDidUpdate(){
        var scrollView = this.refs.scrollView ;
        const {activityTab} = this.props.lobby;
        scrollView.scrollResponderScrollTo({x:activityTab*width,y:0,animated:false});
    }
    _talkEvent(i) {
        if(i!=this.props.activityTab) return;
       var router ={name:'Talk'};
        this.props.navigator.push(router);
    }
    _renderTabItems(tellerData) {
        const { changeActiveTabStatus} = this.props.actions;
        const {activityTab} = this.props.lobby;
        return tellerData.map(function (items, i) {
            return (
                <TouchableOpacity  onPress={()=>changeActiveTabStatus(i)}>

                    <View style={[styles.tab,{opacity:i==activityTab?1:0.3}]}>
                        <View style={[styles.tabTitle,{marginTop:2}]}>
                            <Text style={FrontStyles.tabTitle}>{items.CounterNum} 号 窗 口</Text>
                        </View>
                        <View style={[styles.tabTitle,{marginTop:2}]}>
                            <Text style={FrontStyles.tellerNum}>{items.TellerNum}</Text>
                        </View>
                        <View style={[styles.msgRow,{marginTop:2}]}>
                            <Text style={FrontStyles.label}>可办业务:{items.Busi + ''}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>this._talkEvent(i)}>
                        <View style={[styles.msgRow,{marginTop:20}]}>
                            <Text style={FrontStyles.talk}>交 谈</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )
        }.bind(this))
    }
    _renderListItems(customData) {

        return customData.map(function (items, i) {
            return (
                <View  style={[styles.listView]}>
                    <List ListData={items} {...this.props}/>
                </View>
            )
        }.bind(this))
    }
    _renderNavigationView() {
    return (
        <ThemesList
            onSelectItem={this.onSelectTheme}
            />
    );
}
    _renderHeader() {
        return (

            <NavigationBar
                title={{ title: '大堂管理' }}
                />

        );
    }
    render()
    {

        return (
            <DrawerLayoutAndroid
                ref={DRAWER_REF}
                drawerWidth={width - DRAWER_WIDTH_LEFT}
                keyboardDismissMode="on-drag"
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={this._renderNavigationView}>
            <View style={{flex:1,backgroundColor: 'rgba(52,63,81,1)'}}>
                {this._renderHeader()}
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'rgba(214,73,5,0.5)',height:10,width:5}}/>

                    <Text style={{color:'green'}}>柜员信息</Text>

                </View>
                <View style={[styles.line]}/>
                <View>
                    <ScrollView style={styles.scrollView}
                                horizontal={true}
                                sendMomentumEvents={true}>
                        {this._renderTabItems(TellerData)}
                    </ScrollView>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'rgba(214,73,5,0.5)',height:10,width:5}}/>
                        <Text style={{color: 'yellow'}}>排队顾客</Text>
                </View>
                <View style={[styles.line]}/>
                <View style={styles.listContainer}>
                    <ScrollView ref='scrollView'style={{flex:1}}
                                scrollEnabled={false}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                        { this._renderListItems(CustomData)}
                    </ScrollView>
                </View>

            </View>
            </DrawerLayoutAndroid>
        );
    }

}

var styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        //padding: 2,
    },
    line: {
        marginTop:1,
        height: 3,
        backgroundColor: 'rgba(214,73,5,0.5)'
    },
    tab: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,1)',
        height: height * 0.25,
        width: width * 0.33,
        borderWidth: 1,
        padding: 2,
        borderColor: 'rgba(0,0,0,0.5)',
        borderRadius:5,

    },
    listView: {
        flex: 1,
        width: width,
        backgroundColor: 'rgba(255,255,255,0.1)',
        //padding: 1,
        height: height * 0.75-120

    },
    listContainer: {
        flex: 1,
        marginBottom: 51,
    },
    tabTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    toolbar: {
        backgroundColor: '#333333',
        height: 56
        // opacity:0.5

    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    }


});

module.exports = Manager;

