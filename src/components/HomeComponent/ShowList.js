/**
 * Created by liu on 2016/3/3.
 */
'use strict';
var React = require('react-native');
var ShowListContainer=require('./ShowListContainer');
var {
    StyleSheet,
    TouchableOpacity,
    ListView,
    Text,
    Image,
    View,
    ToolbarAndroid,
    Component,
    ScrollView,
    Dimensions
    } = React;
var { width, height, scale } = Dimensions.get('window');

var itemHeight = 100,
    picFormat = '_640x200xzq75.jpg';

if (height === 375) {
    itemHeight = 117;
    picFormat = '_750x234xzq75.jpg';
} else if (height === 414) { //IP6 Plug
    itemHeight = 99.6;
    picFormat = '_1080x260xzq75.jpg';
}

class ShowList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5']),
            // rateDate:["1"]
        }
    }

    render() {
        return (

            <View>
                <Text style={{flex:1,fontSize:16,color:'#3366cc'}}>理财产品</Text>
            <ScrollView
                ref='scrollView'
                contentContainerStyle={styles.container}
                automaticallyAdjustContentInsets={false}
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                sendMomentumEvents={true}

                // onScrollBeginDrag={this._onScrollBegin}
                >
                <ShowListContainer/>
                <ShowListContainer/>
                <ShowListContainer/>
                <ShowListContainer/>
            </ScrollView>
                <Text style={{flex:1,fontSize:16,color:'#cc0000'}}>收益TOP5</Text>
                <ScrollView
                    ref='scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    sendMomentumEvents={true}

                    // onScrollBeginDrag={this._onScrollBegin}
                    >
                    <ShowListContainer/>
                    <ShowListContainer/>
                    <ShowListContainer/>
                    <ShowListContainer/>
                </ScrollView>
            </View>

        );
    }

}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        width:150,
        height:60,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
    },
    list: {
        marginTop:5,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }


})
module.exports=ShowList;