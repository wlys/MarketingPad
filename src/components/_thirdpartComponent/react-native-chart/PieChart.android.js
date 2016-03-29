var React=require('react-native');
var { requireNativeComponent,PropTypes } = React;

var iface = {
    name: 'PieChart',
    propTypes: {

        chartStyles:PropTypes.string,

        dataSource:PropTypes.string,
        numberOfLines:React.PropTypes.number,
        text:PropTypes.string,

        legend:PropTypes.string,
        renderToHardwareTextureAndroid: React.PropTypes.bool,
        onLayout: React.PropTypes.bool,
        accessibilityLiveRegion: React.PropTypes.string,
        accessibilityComponentType: React.PropTypes.string,
        importantForAccessibility: React.PropTypes.string,
        accessibilityLabel: React.PropTypes.string,
        testID: React.PropTypes.string,

    },
};

module.exports = requireNativeComponent('MPPieChart', iface);
