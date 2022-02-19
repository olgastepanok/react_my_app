import React from "react";
import { List} from 'antd';
class MyListComponentAntdUnique extends React.Component{

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
                <List
                    header={<div>List with unique values start</div>}
                    size="large"
                    itemLayout="horizontal"
                    dataSource={this.getUniqueValues(this.props.items)}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    footer={<div>List with unique values end</div>}
                />
            </div>
        );
    }
}
export default MyListComponentAntdUnique;