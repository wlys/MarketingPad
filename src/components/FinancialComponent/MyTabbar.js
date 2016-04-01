//首页分类模块

'use strict';

var React = require('react-native');

var {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Dimensions,
    ScrollView,
    Navigator,
    } = React;

var heightTabRow = (Dimensions.get('window').height/13);
var globalNavigator=null;

var MyTabbar = React.createClass({
    componentWillMount:function() {
        var markArray=[];
        var routerArray=[];
        for(var i=0; i < this.props.tabArray.length;i++){
            markArray[i] = 0;
        }
        this._routerArray = routerArray;
        this._markArray = markArray;
    },
    componentDidMount: function() {

    },
    componentWillUnmount:function() {
    },
    _configureScene () {
        return Navigator.SceneConfigs.FadeAndroid;
    },

    _renderScene (router, navigator) {
        var Component = null;
        globalNavigator = navigator;
        this._markArray[router.name]+=1;
        console.log( router.name + " _markArray:" + this._markArray[router.name]);
        this._routerArray[router.name]=router;
        return this.props.tabArray[router.name].componentScene;
    },

    render() {
        console.log("render" );
        return(
            <View>
                <MyTabbarHeader tabArray={this.props.tabArray} routerArray={this._routerArray} markArray={this._markArray} />
                <View style={{height:(this.props.height - heightTabRow)}}>
                    <Navigator
                        initialRoute={{name: 0}}
                        configureScene={this._configureScene}
                        renderScene={this._renderScene}
                        />
                </View>
            </View>
        )
    }
});

var MyTabbarHeader = React.createClass({
    getInitialState: function() {
        return {
            tabIndex: 0,
        };
    },
    componentWillMount:function() {
        this._routerArray = this.props.routerArray;
        this._markArray = this.props.markArray;
    },
    componentDidMount: function() {

    },
    componentWillUnmount:function() {
    },

    _setStyle:function(i){
        if(i == this.state.tabIndex){
            return {
                flex: 1,
                width:(Dimensions.get('window').width/(this.props.tabArray.length>5?5:this.props.tabArray.length)),
                height: heightTabRow,
                borderColor: '#00DDAA',
                borderBottomWidth: 2.5,
            };
        }
        return  {
            flex: 1,
            width:(Dimensions.get('window').width/(this.props.tabArray.length>5?5:this.props.tabArray.length)),
            height: heightTabRow
        };
    },

    _renderTabHeader(){
        return this.props.tabArray.map(function (items, i) {
            return (
                <TouchableOpacity key={i} onPress={()=>this._tabSelectedEvent(i)} style={{flex: 1}}>
                    <View style={this._setStyle(i)}>
                        <Text style={styles.welcome}>
                            {items.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }.bind(this));
    },
    _tabSelectedEvent(i) {
        if(i == this.state.tabIndex){
            return;
        }
        if(1>this._markArray[i]){
            console.log("this._navigator.push({name:i}); " + i);
            if(this._topRouter){
                globalNavigator.jumpTo(this._topRouter);
            }
            console.log("this._topRouter; " + this._topRouter);
            this._topRouter = {name:i};
            console.log("this._navigator; " + globalNavigator);
            globalNavigator.push(this._topRouter);
        }else{
            console.log("this._navigator.jump({name:i});" + i);
            globalNavigator.jumpTo(this._routerArray[i]);
        }
        console.log("pre setState:" + this.state.tabIndex);
        this.setState({tabIndex: i});
        console.log("after setState:" + this.state.tabIndex);
    },

    render() {
        console.log("MyTabbarHeader render" );
        return(
                <View style={styles.flexContainer}>
                    <ScrollView key={'scrollView'} horizontal={true}>
                        { this._renderTabHeader()}
                    </ScrollView>
                </View>
        )
    }
});


module.exports=MyTabbar;
var styles = StyleSheet.create({
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flex: 1,
        flexDirection: 'row',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
});