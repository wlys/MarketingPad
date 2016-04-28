/**
 * Created by liu on 2016/4/6.
 */
import React from 'react-native';
import {bindActionCreators} from 'redux';
var CustomMsg=require('../components/LobbyMgrComponent/CustomMsg');
import * as NavigatorActions from '../reducers/navigator/NavigatorActions';
let {
    View,
    Component,
    Navigator
    } = React;
import {connect} from 'react-redux'


var Navigation = new Navigator();
class NavigtorContainer extends Component {



        _configureScene () {
            return Navigator.SceneConfigs.PushFromRight;
        }

        _renderScene (router, navigator) {
            const {Page,PayLoad}=this.props.navigator;

            return <Page {...PayLoad}{ ...this.props.actions}/>
        }
        render() {

            return (

                <Navigatior
                    initialRoute={{}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene.bind(this)}/>

            );
        }

}
function mapStateToProps(state) {
    return {
        ...state
    };
}
function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(NavigatorActions, dispatch)

    };
}
export default connect(mapStateToProps, mapDispatchToProps,null,{withRef:true})(NavigtorContainer);