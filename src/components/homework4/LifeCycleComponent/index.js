import React from "react";
import {connect} from 'react-redux';
import {changeIsShownAction} from '../../../store/actions';
import { Button } from 'antd';
class LifeCycleComponent extends React.Component{
    constructor(){
        super();
        this.changeIsShown = this.changeIsShown.bind(this);
    }

    changeIsShown(){
        this.props.dispatch(changeIsShownAction());
        const message = !this.props.isShown ? "Component will be shown" : "Component will be hide"
        return alert(message);
    }
    render(){
        return(
            <div>
                {this.props.isShown && <h1>IsShown == TRUE</h1>}
                <Button type="primary" onClick={this.changeIsShown}>{this.props.buttonText}</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isShown: state.isShown,
        buttonText: state.buttonText,
    }
}
export default connect(mapStateToProps)(LifeCycleComponent);