import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {

 const [todos, setTodos] = useState([])

 const addToDos = (todo) => {
     if(!todo.text || /^\s*$/.test(todo.text)){
         return
     }

     const newTodos = [todo, ...todos];

     setTodos(newTodos)
 }

 const updatedTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
    
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
 }

 const removeTodo = (id) => {
     const removeArray =  [...todos].filter(todo => todo.id != id)
     setTodos(removeArray)
 }

 const completeTodo = (id) => {
     const updatedTodos = todos.map((todo) => {
        if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo
     })
     setTodos(updatedTodos)
 }

  return (
    <div>
       <h1>To-do List</h1> 
       <TodoForm onSubmit={addToDos}/>
       <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodo={updatedTodo}/>
    </div>
  )
}

export default TodoList