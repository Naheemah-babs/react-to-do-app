import TodoItems from "./TodoItems";
export default function TodoList({todos}) {
  return (
    <div>
      {todos.map((items) => (
        <TodoItems items={items} />
      ))}
    </div>
  );
}
