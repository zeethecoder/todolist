import React, { useState } from "react"

function Background(){
    const [newTodo, setNewTodo] = useState('')
    const [Todos, setTodos] = useState([])

    function handleNewTodoChange(e) {
        e.preventDefault()
        setNewTodo(e.target.value)
    }
    function handleNewTodo(e) {
        e.preventDefault()
        if (newTodo === '') return
        setTodos([...Todos, {id: Date.now(), text: newTodo}])
        e.target.reset()
    }

    function removeTodo(id){
        setTodos(Todos.filter((todo => todo.id !== id)))
    }
    return(
        <div className="card-1">
            <div className="nav">
                <h4>Todo List</h4>
            </div>
            <div className="list">
                <h1>Todays Tasks</h1>
                <form onSubmit={handleNewTodo}>
                    <input placeholder="Your Daily Tasks...." onChange={handleNewTodoChange} />
                    <ul className="todolist">
                        {Todos.map((todo) => (
                            <li key={todo.id}>
                               {todo.text} 
                               <a href="#" onClick={()=> removeTodo(todo.id)}>
                                    X
                               </a>
                            </li>
                        ))}
                        
                    </ul>
                </form>
            </div>

        </div>
    );
}

export default Background