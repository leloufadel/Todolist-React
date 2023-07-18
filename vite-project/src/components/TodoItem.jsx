import React from 'react';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    
    <li className={styles.item}>
      <div className={styles.content}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
     <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </div>
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
