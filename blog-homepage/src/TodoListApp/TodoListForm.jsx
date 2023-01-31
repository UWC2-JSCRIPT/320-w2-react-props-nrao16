import { React } from "react";

function TodoListForm({ itemToAdd, setItemText, addItem }) {

    return (
        <div>
            <form onSubmit={addItem}>
            <label htmlFor="todo-input">Todo: </label>
                <input id="todo-input" 
                type="text" 
                value={itemToAdd}
                onChange={event => setItemText(event.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoListForm;