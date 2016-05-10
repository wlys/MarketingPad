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
        //����д�� const navigator = this.props.navigator;
        //Ϊʲô�������ȡ�� props.navigator?�뿴����:
        //<Component {...route.params} navigator={navigator} />
        //���ﴫ����navigator��Ϊprops
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