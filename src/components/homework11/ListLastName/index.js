import React from "react";

class ListLastName extends React.Component {
  shouldComponentUpdate(currentProps) {
    return this.props.list.length !== currentProps.list.length;
  }

  render() {
    let props = this.props;
    return (
      <div>
        <button onClick={props.handleAddItemToListLastNames}>Add to List</button>
        <ol>
          {this.props.list.map(item => {
            const {id, value} = item;
            return (
              <li key={id}>{value}
              </li>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default ListLastName;