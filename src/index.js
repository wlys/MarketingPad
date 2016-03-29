/**
 * Created by seastar on 16/3/8.
 */
'use strict';

import App from './views/App'
import React, {
    AppRegistry,
    Platform,
} from 'react-native';

export default function native(platform) {

    const MarketingPad = React.createClass ({
        render() {
            if (Platform.OS === 'android') {
                console.log(platform)
                return (
                    <App />
                );

            }
            else {

            }
        }
    })

    AppRegistry.registerComponent('MarketingPad', () => MarketingPad);

}


