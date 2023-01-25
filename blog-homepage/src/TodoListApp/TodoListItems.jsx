import React from "react";

function TodoListItems({ todos} ) {

    const todoList = todos.map((todo, index) => {
        return (
        <li key={index}>{todo} </li>
        )
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