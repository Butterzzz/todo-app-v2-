import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isComplited: !todo.isComplited }
        : { ...todo }
    }))
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const deleteCompletedTpdpsHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosActions resetTodos={resetTodoHandler} deleteComplitedTodos={deleteCompletedTpdpsHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
