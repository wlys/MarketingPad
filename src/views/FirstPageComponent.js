import React,{
    View,
    Text,
    TouchableOpacity
    } from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        //或者写成 const navigator = this.props.navigator;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>to2page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}