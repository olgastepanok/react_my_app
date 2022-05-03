import React, {memo} from "react";

class ListFirstName extends React.Component {
  render() {
    let props = this.props;
    return (
      <div>
        <button onClick={props.handleAddItemToListFirstNames}>Add to List</button>
        <ul>
          {this.props.list.map(item => {
            const {id, value} = item;
            return (
              <li key={id}>{value}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default memo(ListFirstName);