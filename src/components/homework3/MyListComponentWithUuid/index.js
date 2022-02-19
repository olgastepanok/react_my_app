import React from "react";
import {v4} from "uuid";
class MyListComponentWithUuid extends React.Component{
    getUniqueValues(items){
            const uniqueValues = [];
            items.map(({value}) => {
                if (uniqueValues.indexOf(value) === -1) {
                    uniqueValues.push(value)
                }
            });
           return  uniqueValues;
    }
    render(){
        return(
            <div>
                {this.getUniqueValues(this.props.items).map((value)=>{
                    return <p key={v4()}>{value}</p>;
                    })
                }
            </div>
        );
    }
}
export default MyListComponentWithUuid;