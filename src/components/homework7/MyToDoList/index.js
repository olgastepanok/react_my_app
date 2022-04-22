import React from "react";
import Header from "./Header";
import List from "./List";
import SubmitForm from "./SubmitForm";

class MyToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleDoneTodo = this.handleDoneTodo.bind(this);
    }
    state = {
        list: [],
    };
    handleAddTodo(item) {
        this.setState({
            list: this.state.list.concat(item)
        })
    }
    handleDeleteTodo(id) {
        this.setState({
            list: this.state.list.filter(l=> l.id !== id)
        })
    }
    handleDoneTodo(id) {
        let list = this.state.list;
        list.forEach(l=>{
            if(l.id===id){
                l.isDone=!l.isDone;
            }
        });
        this.setState({list: list});
    }
    render(){
        return(
            <div>
                <Header count = {this.state.list.length}/>
                <SubmitForm handleAddTodo={this.handleAddTodo}/>
                <List list={this.state.list} handleDeleteTodo={this.handleDeleteTodo} handleDoneTodo={this.handleDoneTodo}/>
            </div>
        );
    }
}

export default MyToDoList;