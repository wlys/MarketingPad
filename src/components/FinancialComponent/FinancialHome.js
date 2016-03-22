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
var tabArray=[{name:'基金',},{name:'国债'},{name:'保险'},{name:'理财'},];


var FinancialHome = React.createClass({
    getInitialState: function() {
        return {
            tabIndex: 0,
        };
    },
    componentDidMount: function() {
    },
    _setStyle:function(i){
        if(i == this.state.tabIndex){
            return styles.cellTouch;
        }
        return styles.cell;
    },

    _renderTabHeader(tabArray,styles){

        return tabArray.map(function (items, i) {
            return (
                <TouchableOpacity onPress={()=>this._tabSelectedEvent(i)} style={{flex: 1}}>
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
        if (i != this.state.tabIndex) {
            this.setState({tabIndex: i});
        }
    },

    _renderTabContent(i){
        if(i==0){
            return <Fund navigator={this.props.navigator}/>
        }
        return <View><Text>

            {Dimensions.get('window').width}
            __
            {Dimensions.get('window').height}
        </Text></View>
    },
    render() {

        return(
            <View>
                <View style={styles.flexContainer}>
                    <ScrollView key={'scrollView'} horizontal={true}>
                        { this._renderTabHeader(tabArray,styles)}
                    </ScrollView>

                </View>
                {this._renderTabContent(this.state.tabIndex)}
            </View>
        )
    }
});
module.exports=FinancialHome;
var styles = StyleSheet.create({
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flex: 1,
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        width:(Dimensions.get('window').width/(tabArray.length>5?5:tabArray.length)),
        height: (Dimensions.get('window').height/13),
        backgroundColor: '#00DDAA',
    },
    cellTouch: {
        flex: 1,
        width:(Dimensions.get('window').width/(tabArray.length>5?5:tabArray.length)),
        height: (Dimensions.get('window').height/13),
        backgroundColor: '#FFFFFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
});