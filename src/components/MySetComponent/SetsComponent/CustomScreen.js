/**
 * Created by xuhanmeng on 16/3/28.
 */
import React from 'react-native';
const {
    Component,
    View
    } = React;
import NavigationBar  from '../../_thirdpartComponent/NavBar';

export default class CustomScreen extends Component {
    render() {
        const leftButtonConfig = {
            title: 'Back',
            handler: () => this.props.navigator.pop(),
        };

        return (
            <View style={{ flex: 1, backgroundColor: '#9999CC', }}>
                <NavigationBar
                    title={{ title: 'Custom screen', }}
                    leftButton={leftButtonConfig} />
            </View>
        );
    }
}