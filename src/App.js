import React from 'react';

import TodoItem from './components/TodoItem';
import todoData from './todoData'

function App() {
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App