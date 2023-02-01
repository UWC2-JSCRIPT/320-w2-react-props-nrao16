import React from "react"

// alternate way without direct destructuring
//function TodoListItem(props) {
//const {itemIndex, itemData} = props;

function TodoListItem({ itemIndex, itemData }) {
    return (
        <li key={itemIndex}>{itemData}</li>
    );
};

export default TodoListItem;