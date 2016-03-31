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
        var tabArray=[{name:'基金',componentScene:<Fund navigator={this.props.navigator}/>},
            {name:'国债',componentScene:<View><Text>1</Text></View>},
            {name:'保险',componentScene:<View><Text>2</Text></View>},
            {name:'理财',componentScene:<View><Text>3</Text></View>}];
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
