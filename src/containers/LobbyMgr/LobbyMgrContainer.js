/**
 * Created by liu on 2016/3/30.
 */
import React from 'react-native';
import {bindActionCreators} from 'redux';
import * as LobbyMgrAction from '../../reducers/lobby/LobbyMgrActions';
let {
    View,
    Component
    } = React;
import {connect} from 'react-redux'

import LobbyMgr from '../../components/LobbyMgrComponentRedux/Manager'

class LobbyMgrContainer extends Component {
    render() {


        return (
            <LobbyMgr  {...this.props}/>
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
        actions: bindActionCreators(LobbyMgrAction, dispatch)

    };
}
export default connect(mapStateToProps, mapDispatchToProps,null,{withRef:true})(LobbyMgrContainer);
/*
export default connect(state => ({
         ...state
    }),
    (dispatch) => ({
        actions: bindActionCreators(LobbyMgrAction, dispatch)
    }),null,{withRef:true}
)(LobbyMgrContainer);
*/
