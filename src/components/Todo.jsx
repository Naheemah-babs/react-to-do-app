import { useState } from "react";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleSubmit(e){
    e.preventDefault();
    setTodoList([...todoList, todo])
    setTodo("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      {todoList.map((items) => (
        <TodoItems items={items} />
      ))}
    </div>
  );
}
