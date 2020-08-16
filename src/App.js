import React, { Component } from 'react';

import TodoItem from './components/TodoItem';
import todoData from './todoData'

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            return {
                todos: updatedTodos
            }
        });
    }
}

export default App