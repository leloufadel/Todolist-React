import React from 'react';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
     <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  );
};
export default TodoItem;

// const TodoItem = ({ itemProp, setTodos }) => {

//   const handleChange = (id) => {
//     console.log('clicked', id);
//   };

//   return (
//     <li>
//       <input
//         // ...
//         type="checkbox"
//         checked={itemProp.completed}
//         onChange={() => handleChange(itemProp.id)}
//       />
//       {itemProp.title}
//     </li>
//   );
// };
// export default TodoItem;
