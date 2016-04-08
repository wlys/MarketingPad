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
    } = React;
var Fund=require('./Fund');
var Financial=require('./Financial');
var MyTabbar=require('./MyTabbar');
var NavigationBar = require( '../_thirdpartComponent/NavBar');
var FinancialHome = React.createClass({
    getInitialState: function() {
        return {

        };
    },
    componentDidMount: function() {
    },

    render() {
        var tabArray=[
            {name:'理财',componentScene:<Financial navigator={this.props.navigator}/>},
            {name:'基金',componentScene:<Fund navigator={this.props.navigator}/>},
            {name:'保险',componentScene:<Financial navigator={this.props.navigator}/>},
            {name:'国债',componentScene:<Fund navigator={this.props.navigator}/>},
            ];
        return(
            <View>
                <NavigationBar
                    title={{ title: '理财产品', }}
                    />
                <MyTabbar tabArray={tabArray} height={Dimensions.get('window').height - 50 - 2*Dimensions.get('window').height/13}/>
            </View>
        )
    }
});
module.exports=FinancialHome;
