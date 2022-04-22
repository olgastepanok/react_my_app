import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import styles from '../Styles.module.scss'

class List extends React.Component{
    render(){
        return(
            <ul>
                {this.props.list.map(item=>{
                    const {id, value, isDone} = item;
                    return(
                        <li className={styles.todo + (isDone ? (' ' + styles.done) : '')}  key={id}>{value}
                            <button onClick={() => this.props.handleDeleteTodo(id)}><DeleteIcon /></button>
                            <button onClick={() => this.props.handleDoneTodo(id)}><DoneIcon /></button>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default List;