/**
 * Created by seastar on 16/3/8.
 */
'use strict';

import App from './views/App'
import React, {
    AppRegistry,
} from 'react-native';

export default function native(platform) {

    const MarketingPad = React.createClass ({
        render() {
            console.log(platform)
            return (
                <App />
            );

        }
    })

    AppRegistry.registerComponent('MarketingPad', () => MarketingPad);

}


