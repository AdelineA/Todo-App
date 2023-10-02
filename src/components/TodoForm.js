import React, { useState } from "react";

export default function TodoForm() {
  const [list, setList] = useState("");
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList(...list, newTodo);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => {
      todo.id !== id;
    });
    setList(newList);
  };

  const handleClick = () => {
    addTodo(input);
  };
  return (
    <div className="flex items-center justify-center gap-4 py-10">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="What to do"
        className="border-2 px-4 py-2"
      />
      <button onClick={handleClick} className="bg-red-300 py-4 px-2 rounded-lg">
        Add Task
      </button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={deleteTodo}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
