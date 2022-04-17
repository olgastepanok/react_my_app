import React from "react";
import {connect} from 'react-redux';
import {changeFormInputAction, changeFormTextAction, changeJsonAction, changeFormSelectAction} from '../../../store/actions';
class MyFormPart1 extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
      }
    handleInputChange(event) {
        this.props.dispatch(changeFormInputAction(event.target.value));
    }
    handleTextChange(event) {
        this.props.dispatch(changeFormTextAction(event.target.value));
    }
    handleSelectChange(event) {
        this.props.dispatch(changeFormSelectAction(event.target.value));
    }
    handleSubmit(event) {
        this.props.dispatch(changeJsonAction(JSON.stringify(this.props.formObj)));
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                          Input:
                          <input type="text" value={this.props.inputValue} onChange={this.handleInputChange} />
                        </div>
                        <div>
                          Text Area:
                          <textarea value={this.props.textValue} onChange={this.handleTextChange} />
                        </div>
                        <div>
                        Select:
                            <select value={this.props.selectValue} onChange={this.handleSelectChange}>
                              <option value="select1">SelectValue1</option>
                              <option value="select2">SelectValue2</option>
                              <option value="select3">SelectValue3</option>
                              <option value="select4">SelectValue4</option>
                            </select>
                        </div>
                            <input type="submit" value="Send" />
                    </form>
                </div>
                <div>
                    {this.props.json}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        formObj:state.formObj,
        inputValue:state.formObj.inputValue,
        textValue:state.formObj.textValue,
        selectValue:state.formObj.selectValue,
        json:state.json,
    }
}
export default connect(mapStateToProps)(MyFormPart1);