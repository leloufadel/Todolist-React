import React, { useState } from 'react';
import TodosLogic from './components/TodosLogic';
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodosLogic />
    </div>
  );
}

export default App;
