import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header>In ToDo list {this.props.count} item(s)</header>
        );
    }
}

export default Header;