import React from "react";
import {v4} from "uuid";

class SubmitForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    state ={
        value:""
    }
    handleInputChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value) {
            this.props.handleAddTodo({
                id: v4(),
                value: this.state.value,
                isDone: false,
            });
            this.setState({
                value: "",
            })
        }
    }
    render(){
        return(
            <div>
                <form>
                        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                        <input type="submit" value="Add todo" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default SubmitForm;