import React from "react";
import TodoListItem from "./TodoListItem";

function TodoListItems({ todos }) {

    const todoList = todos.map((todo, index) => {
        return (
            <TodoListItem itemData={todo}
                itemIndex={index} />
        );
    });

    return (
        <div>
            <h2>Todos:</h2>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

export default TodoListItems