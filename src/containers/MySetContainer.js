/**
 * Created by liu on 2016/5/6.
 */
/**
 * Created by liu on 2016/3/30.
 */
import React from 'react-native';
import {bindActionCreators} from 'redux';
import * as mySetActions from '../reducers/mySet/mySetActions';
import LoginContainer from './LoginContainer';
let {
    View,
    Component
    } = React;
import {connect} from 'react-redux'

import MySetHome from '../components/MySetComponent/MySetHome'

class mySetContainer extends Component {
    shouldComponentUpdate( nextProps, nextState){

        return !(nextProps.mySet===this.props.mySet&&nextProps.global === this.props.global);
    }
    render() {
        return (
            <MySetHome {...this.props}/>
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
 mySetActions: bindActionCreators(mySetActions, dispatch)

 };
 }
export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(mySetContainer);
/*
 export default connect(state => ({
 ...state
 }),
 (dispatch) => ({
 actions: bindActionCreators(LobbyMgrAction, dispatch)
 }),null,{withRef:true}
 )(LobbyMgrContainer);
 */
