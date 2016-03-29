import React from 'react-native';
const {
  Text,
  TouchableOpacity,
  Component,
  View,
  PropTypes,
} = React;
import styles from './styles';

export default class NavbarButton extends Component {
  render() {
    const { style, styleText, tintColor, margin, title, handler } = this.props;

    return (
      <TouchableOpacity style={styles.navBarButton} onPress={handler}>
        <View style={style}>
          <Text style={[styles.navBarButtonText, { color: tintColor,},styleText ]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    tintColor: PropTypes.string,
    title: PropTypes.string,
    handler: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    title: '',
    tintColor: '#0076FF',
    onPress: () => ({}),
  };
}
