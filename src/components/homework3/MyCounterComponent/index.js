import React from "react";
import { Button } from 'antd';
class MyCounterComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0,
        };
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }
    handleClickPlus(){
        this.setState({value: this.state.value+1});
    }
    handleClickMinus(){
        this.setState({value: this.state.value-1});
    }
    render(){
        return(
            <div>
                <h1>Result = {this.state.value}</h1>
                <Button type="primary" onClick={this.handleClickPlus}>+</Button>
                <Button type="primary" onClick={this.handleClickMinus}>--</Button>
            </div>
        );
    }
}
export default MyCounterComponent;