import React from 'react'
import TodoItem from './TodoItem';


    const TodosList = ({ todosProps, handlechange, delTodo, setUpdate }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo}
        handleChange={handlechange}
        setUpdate={setUpdate}
        delTodo={delTodo}
           
           />
        ))}
      </ul>
    );
  };
  export default TodosList;
  
