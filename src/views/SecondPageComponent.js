import React, {
    View,
    Text,
    TouchableOpacity,
    } from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>to1page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}