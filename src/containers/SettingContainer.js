/**
 * Created by liu on 2016/5/6.
 */
/**
 * Created by liu on 2016/3/30.
 */
import React from 'react-native';
import {bindActionCreators} from 'redux';
import * as globalActions from '../reducers/global/globalActions';
import LoginContainer from './LoginContainer';
let {
    View,
    Component
    } = React;
import {connect} from 'react-redux'

import Setting from '../components/MySetComponent/Setting'

class SettingContainer extends Component {
    shouldComponentUpdate( nextProps, nextState){

        return !(nextProps.global === this.props.global);
    }
    render() {
        return (
            <Setting {...this.props}/>
        )

    }
}
function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {

 return {
     globalActions: bindActionCreators(globalActions, dispatch)

 };
 }
export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(SettingContainer);
/*
 export default connect(state => ({
 ...state
 }),
 (dispatch) => ({
 actions: bindActionCreators(LobbyMgrAction, dispatch)
 }),null,{withRef:true}
 )(LobbyMgrContainer);
 */

