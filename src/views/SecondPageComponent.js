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
            //����Ϥ�ɣ���ջ��ջ~ �ѵ�ǰ��ҳ��pop��������ͷ��ص�����һ��ҳ��:FirstPageComponent��
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