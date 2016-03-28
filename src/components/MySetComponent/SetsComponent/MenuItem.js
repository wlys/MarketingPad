'use strict';
var React = require('react-native');

var {
    Text,
    Component,
    TouchableHighlight,
    View,
    Image,
    StyleSheet,
    } = React;

class MenuItem extends Component{
    _performClick () {
        let onClick = this.props.onClick;
        if(onClick){

            onClick();
        }
    }

    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
        this.state = {
            title: null,  //这里放你自己定义的state变量及初始值
            icon: null,
            margin2Top:null,
        };
    }

    render () {
        let margin2Top =parseInt(this.props.margin2Top);
        return (
            <TouchableHighlight underlayColor="#dad9d7" onPress={this._performClick.bind(this)}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#ffffff',height:45,marginTop:margin2Top,paddingLeft:20,paddingRight:20}}>
                    <Image style={[styles.iconSize]}
                           source={require('./../Thumbnails/icon_bottomtag_me_n.png')} />
                    <Text  style={{flex:1,color:'#333333',marginLeft:10}}>{this.props.title}</Text>
                    <Image style={[styles.iconSize]}
                           source={require("./../Thumbnails/arrow_right_grey.png")} />

                </View>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    iconSize: {
        height:20,
        width:20,
        resizeMode: Image.resizeMode.contain,
    },
});

module.exports=MenuItem;

