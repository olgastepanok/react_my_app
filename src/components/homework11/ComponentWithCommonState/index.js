import React from 'react';
import faker from "@faker-js/faker";
import {v4} from "uuid";
import ListFirstName from "../ListFirstName";
import ListLastName from "../ListLastName";

class ComponentWithCommonState extends React.Component{
  state = {
    listFirstNames: [],
    listLastNames: [],
    isFirstNamesList: true,
  };

  constructor(props){
    super(props);
    for(let i = 0; i<100; i++){
      this.state.listFirstNames.push({id: v4(),
        value: faker.name.firstName(),
      });
    }
    for(let i = 0; i<100; i++){
      this.state.listLastNames.push({id: v4(),
        value: faker.name.lastName(),
      });
    }
    this.handleChangeVisibleList = this.handleChangeVisibleList.bind(this);
    this.handleAddItemToListFirstNames = this.handleAddItemToListFirstNames.bind(this);
    this.handleAddItemToListLastNames = this.handleAddItemToListLastNames.bind(this);
  }
  handleChangeVisibleList(){
    this.setState({isFirstNamesList: !this.state.isFirstNamesList});
  }
  handleAddItemToListFirstNames(){
    this.setState({
      listFirstNames: this.state.listFirstNames.concat({
        id: v4(),
        value: faker.name.firstName(),
      })
    })
  }

  handleAddItemToListLastNames(){
    this.setState({
      listLastNames: this.state.listLastNames.concat({
        id: v4(),
        value: faker.name.lastName(),
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChangeVisibleList}>Change List</button>
        {this.state.isFirstNamesList
          ? <ListFirstName list={this.state.listFirstNames} handleAddItemToListFirstNames={this.handleAddItemToListFirstNames}/>
          : <ListLastName list={this.state.listLastNames} handleAddItemToListLastNames={this.handleAddItemToListLastNames} />}
      </div>
    );
  }
}
export default ComponentWithCommonState;