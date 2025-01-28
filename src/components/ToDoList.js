import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([""]);
  const handleTodoChange = (index, value) => {
    const newTodo = [...todo];
    newTodo[index] = value;
    setTodo(newTodo);
  };

  return (
    <div className="todoList">
      <h2 className="todoList__title">Todo:</h2>
      <ol className="todoList__list">
        {todo.map((todo, index) => (
          <li className="todoList__listItem" key={index}>
            <input
              className="todoList__listInput"
              type="text"
              value={todo}
              onChange={(e) => handleTodoChange(index, e.target.value)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
