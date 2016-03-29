'use strict';

import React from 'react-native';
const {
    Component,
    Text,
    Navigator,
    View
    } = React;
import NavigationBar from 'react-native-navbar';
import InitialScreen from './SetsComponent/InitialScreen';

function renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator} />;
}

class index extends Component {
    render() {
        const initialRoute = {
            component: InitialScreen
        };

        return (
            <View style={{ flex: 1, }}>
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={renderScene}/>
            </View>
        );
    }
}

module.exports =index;