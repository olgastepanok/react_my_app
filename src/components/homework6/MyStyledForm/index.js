import React from "react";
import {connect} from 'react-redux';
import {changeStyledInputAction, changeStyledInputValidAction, sendStyledFormAction} from '../../../store/actions';
import styles from '../Styles.module.scss'
class MyStyledForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    handleInputChange(event) {
        this.props.dispatch(changeStyledInputAction(event.target.value));
    }
    handleSubmit(event) {
        const validInput = new RegExp('^[a-zA-Z0-9]+$');
        let isValid = validInput.test(this.props.styledFormInput);
        this.props.dispatch(changeStyledInputValidAction(isValid));
        if(isValid){
            this.props.dispatch(sendStyledFormAction());
        }

        event.preventDefault();
    }
    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className = {styles.title}>
                          Input:
                          <input className = {styles.text + (this.props.isValidStyledFormInput !== undefined ?
                          (' ' + (this.props.isValidStyledFormInput === false ? styles.error : styles.success)) : '')}
                          type="text" value={this.props.styledFormInput} onChange={this.handleInputChange} />
                        </div>
                            <input className = {styles.button} type="submit" value="Send" />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        styledFormInput:state.styledFormInput,
        isValidStyledFormInput:state.isValidStyledFormInput,
    }
}
export default connect(mapStateToProps)(MyStyledForm);