import React from 'react'
import TodoItem from './TodoItem';
// ...
// removing this for the second method
//const TodosList = ({ todosProps, setTodos }) => {

    const TodosList = ({ todosProps, handlechange, delTodo }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo}
        //    setTodos={setTodos}
        handleChange={handlechange}
        delTodo={delTodo}
           
           />
        ))}
      </ul>
    );
  };
  export default TodosList;
  
