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

import CustomMsg from '../../components/LobbyMgrComponentRedux/CustomMsg'

class CustomMsgContainer extends Component {
    render() {


        return (
            <CustomMsg  {...this.props}/>
        )
    }
}
function mapStateToProps(state) {
    return {
        ...state
    };
}

/*function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(LobbyMgrAction, dispatch)

    };
}*/
export default connect(mapStateToProps, null,null,{withRef:true})(CustomMsgContainer);
