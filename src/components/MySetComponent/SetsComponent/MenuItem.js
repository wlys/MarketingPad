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

    Children() {
        if(this.props.showChildren){
            return(this.props.children);
        }
    }
    image()
    {
        if(!this.props.showChildren)
        return(
        <Image style={[styles.iconSize]}
               source={this.props.eicon_r} />
        )
    }
    render () {
        let margin2Top =parseInt(this.props.margin2Top);
        const component = this.props.showChildren? this.props.children:null;
        return (
            <View>
            <TouchableHighlight underlayColor="#dad9d7" onPress={this._performClick.bind(this)}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:this.props.color,height:this.props.height,marginTop:margin2Top,paddingLeft:20,paddingRight:20}}>
                    <Image style={[styles.iconSize]}
                           source={this.props.icon_l} />
                    <Text  style={{flex:1,color:'#333333',fontSize:this.props.fontSize,marginLeft:10}}>{this.props.title}</Text>
                    {this.image()}
                </View>
            </TouchableHighlight>
                    {component}
                </View>
        );
    }
}
MenuItem.defaultProps = {
    height:45,
    fontSize:13,
    showChildren:false,
    color:'#ffffff'

};
var styles = StyleSheet.create({
    iconSize: {
        height:20,
        width:20,
        resizeMode: Image.resizeMode.contain,
    },
});

module.exports=MenuItem;

