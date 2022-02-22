import React from "react";
import {connect} from 'react-redux';
import {changeLanguageAction} from '../../../store/actions';
import { Button } from 'antd';
class LanguageComponent extends React.Component{
    constructor(){
        super();
        this.changeToRussian = this.changeToRussian.bind(this);
        this.changeToEnglish = this.changeToEnglish.bind(this);
    }

    changeToRussian(){
        this.props.dispatch(changeLanguageAction("RUSSIAN"));
    }
    changeToEnglish(){
        this.props.dispatch(changeLanguageAction("ENGLISH"));
    }

    render(){
        return(
            <div>
                <h1>{this.props.messageText}</h1>
                <Button type="primary" onClick={this.changeToRussian}>Русский</Button>
                <Button type="primary" onClick={this.changeToEnglish}>English</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        messageText: state.messageText,
    }
}
export default connect(mapStateToProps)(LanguageComponent);