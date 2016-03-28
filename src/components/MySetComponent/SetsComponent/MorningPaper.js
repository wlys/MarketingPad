/**
 * Created by liu on 2016/3/2.
 */
'use strict';
var React = require('react-native');

var {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    ToolbarAndroid,
    Component
    } = React;

class Title extends Component{
    render(){
        return(
            <ToolbarAndroid
                navIcon={require('image!ic_back_white')}
                title={"大堂管理"}
                titleColor="white"
                style={styles.toolbar}

                onIconClicked={() => this.props.navigator.pop()}
                onActionSelected={this.onActionSelected} />
        );
    }
}
var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#333333',
        height: 56

    }

})
module.exports=Title;

