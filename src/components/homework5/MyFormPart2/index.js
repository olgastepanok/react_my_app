import React from "react";
import {connect} from 'react-redux';
import {changeNumberOneAction, changeNumberTwoAction} from '../../../store/actions';
class MyFormPart2 extends React.Component{
    constructor(props) {
        super(props);
        this.handleNumberOneChange = this.handleNumberOneChange.bind(this);
        this.handleNumberTwoChange = this.handleNumberTwoChange.bind(this);
      }
    handleNumberOneChange(event) {
        let obj = {value: event.target.value,
                   convertedValue: event.target.value*0.5,}
        this.props.dispatch(changeNumberOneAction(obj));
    }
    handleNumberTwoChange(event) {
        let obj = {value: event.target.value,
                   convertedValue: event.target.value*0.05,}
        this.props.dispatch(changeNumberTwoAction(obj));
    }
    render(){
        return(
            <div>
                <p/>
                    <div>
                        <input type="number" value={this.props.numberOne} onChange={this.handleNumberOneChange} />
                    </div>
                    <div>
                        <input type="number" value={this.props.numberTwo} onChange={this.handleNumberTwoChange} />
                    </div>
                <p/>
                    <div>
                        {this.props.convertedNumberOne}
                    </div>
                    <div>
                        {this.props.convertedNumberTwo}
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        numberOne:state.numberOne,
        convertedNumberOne:state.convertedNumberOne,
        numberTwo:state.numberTwo,
        convertedNumberTwo:state.convertedNumberTwo,
    }
}
export default connect(mapStateToProps)(MyFormPart2);